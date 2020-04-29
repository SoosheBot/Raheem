import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//data visualization libraru
import { VictoryPie, VictoryTooltip, VictoryBar, VictoryStack, VictoryChart, VictoryAxis, VictoryLabel, VictoryPortal } from 'victory';

//global styles
import { SwitchContainer, StatsContainer, StatsContentContainer, StatsListContainer, StatsDivider, StatsListGrid, StatsVisualContainer, BarContainer, PieContainer  } from '../../styles/dashboard/statsStyles'

//other styles
import { Switch, Grid, FormGroup, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

//*FireStore*
import firebase from '../../config/firebase';

export default function Stats(props) {

    // state //
    //toggle switch state to control list view vs graph view
    const [displayed, setDisplayed] = useState(true);
    
    //state to set report data
    const [officerData, setOfficerData] = useState([]);
    const [departmentData, setDepartmentData] = useState([]);
    // const [precinctData, setPrecinctData] = useState([]);
    
    //params to match officer to reports
    const params = useParams();

    //set data to state from firebase
    //fetch officer specific reports
    useEffect(() => {
        firebase
            .firestore()
            .collection("reports")
            .where('officerId', '==', Number(params.id))
            .get()
            .then(function (querySnapshot) {
                const statsData = [];
                querySnapshot.forEach(function (doc) {
                    statsData.push({ id: doc.id, ...doc.data() });
                })
                setOfficerData(statsData);
                console.log('officer data call', statsData)
            })
            .catch(err => {
                console.log('FAIL');
            })
    }, [params.id]);

    //fetches reports by precinct - doesn't work due to restrictions with firebase
    // useEffect(() => {
    //     firebase
    //         .firestore()
    //         .collection("officers")
    //         .where('officerPrecinct', '==', '#23')
    //         .get()
    //         .then(function (querySnapshot) {
    //             const precData = [];
    //             querySnapshot.forEach(function (doc) {
    //                 precData.push({ id: doc.id, ...doc.data() });
    //             })
    //             setPrecinctData(precData);
    //             console.log('precinct data call', precData)
    //         })
    //         .catch(err => {
    //             console.log('FAIL');
    //         })
    // }, []);

    //fetch all reports (currently used as department data due to the assumption that all QR codes, could later add a .where to add specificity by department)
    useEffect(() => {
        firebase
            .firestore()
            .collection("reports")
            .get()
            .then(function (querySnapshot) {
                const deptData = [];
                querySnapshot.forEach(function (doc) {
                    deptData.push({ id: doc.id, ...doc.data() });
                })
                setDepartmentData(deptData);
                console.log('dept data call', deptData)
            })
            .catch(err => {
                console.log('FAIL');
            })
    }, []);

    //---DATA MANIPULATION FOR STATS--//
    console.log("Officer Data", officerData)
    console.log("Department Data", departmentData)
    // console.log("Precinct Data", precinctData)
    
    //-----RATING CALCULATIONS-----//
    //---average rating---//
    function officerAvgRating() {
        const getOfficerRatings = officerData.reduce((acc, officer) => acc + officer.rating, 0);
            return(
                (getOfficerRatings)/
                (officerData.length)
            );
    }

    function departmentAvgRating() {
        const getDeptRatings = departmentData.reduce((acc, officer) => acc + officer.rating, 0);

                return(
                    (getDeptRatings)/
                    (departmentData.length)
                );
    }

    //data for ratings bar graph
    const ratingData = [
            {group: 'Officer Rating', rating: officerAvgRating(), label: officerAvgRating().toFixed(2)},
            {group: 'Precinct Rating', rating: 4.00, label: "5.25"},
            {group: 'Department Rating', rating: departmentAvgRating(), label: departmentAvgRating().toFixed(2)}
    ];


    //-----TAGS CALCULATIONS-----//
    const officerTags = officerData.map(officer => officer.tags);
    const officerTagsArray = officerTags.flat().sort();
    console.log("officer flat", officerTagsArray)

    const deptTags = departmentData.map(officer => officer.tags);
    const deptTagsArray = deptTags.flat().sort();
    console.log("department flat", deptTagsArray)

    //----complaints----//
    //--totals and averages--//
    
    //officer//
    //total complaints
    const countOfficerComplaintTags = officerTagsArray.filter(x => x !== 'helped' && x !== 'protected').length
    //average per report
    function avgOfficerComplaint() {
        return(
            countOfficerComplaintTags/(officerTagsArray.length)
        )
    }

    //department//
    //total complaints
    const countDeptComplaintTags = deptTagsArray.filter(x => x !== 'helped' && x !== 'protected').length
    //average per report
    function avgDeptComplaint() {
        return(
            countDeptComplaintTags/(deptTagsArray.length)
        )
    }

    //data for bar graph of complaint averages
    const complaintsAvgData = [
        {group: 'Officer', rating: avgOfficerComplaint(), label: `Officer: ${avgOfficerComplaint().toFixed(2)}`},
        {group: 'Precinct', rating: 0.65, label: `Precinct: ${0.65}`},
        {group: 'Department', rating: avgDeptComplaint(), label: `Department: ${avgDeptComplaint().toFixed(2)}`}
    ]

    //--breakdown of Tag Types--//
    //officer
    
    //totals
    const officerIllegalSearch = officerTagsArray.filter(x => x === 'illegally searched').length
    const officerProfiled = officerTagsArray.filter(x => x === 'profiled').length
    const officerPhysAtt = officerTagsArray.filter(x => x === 'physically attacked').length
    const officerHarassed = officerTagsArray.filter(x => x === 'harassed').length
    const officerWronglyAccused = officerTagsArray.filter(x => x === 'wrongly accused').length
    const officerDisrespected = officerTagsArray.filter(x => x === 'disrespected').length
    const officerNeglected = officerTagsArray.filter(x => x === 'neglected').length
    
    //percentages
    const percentIllegalSearch = (officerIllegalSearch/(countOfficerComplaintTags))*100
    const percentProfiled = (officerProfiled/(countOfficerComplaintTags))*100
    const percentPhysAtt = (officerPhysAtt/(countOfficerComplaintTags))*100
    const percentHarassed = (officerHarassed/(countOfficerComplaintTags))*100
    const percentWronglyAccused = (officerWronglyAccused/(countOfficerComplaintTags))*100
    const percentDisrespected = (officerDisrespected/(countOfficerComplaintTags))*100
    const percentNeglected = (officerNeglected/(countOfficerComplaintTags))*100
    
    //percentages data for pie chart
    const complaintsData = [
        { x: 'Illegally Searched', y: percentIllegalSearch, fill: '#111111'},
        { x: 'Profiled', y: percentProfiled, fill: '#EFD114'},
        { x: 'Physically Attacked', y: percentPhysAtt, fill: '#868685'},
        { x: 'Harrassed', y: percentHarassed, fill: '#E8E893'},
        { x: 'Wrongly Accused', y: percentWronglyAccused, fill: '#6F6F6E'},
        { x: 'Disrespected', y: percentDisrespected, fill: '#BBBABA'},
        { x: 'Neglected', y: percentNeglected, fill: '#D5D5D5'},
    ] 
    const complaintLabels = complaintsData.map(complaint => `${complaint.x}: ${complaint.y.toFixed(1)}%` );
    const complaintLabelsPercent = complaintsData.map(complaint => `${complaint.y.toFixed(1)}%` );
    const complaintColors = complaintsData.map(complaint => complaint.fill);
    console.log(complaintLabelsPercent)

    //--breakdown of Tag Types--//
    //department totals//
    const deptIllegalSearch = deptTagsArray.filter(x => x === 'illegally searched').length
    const deptProfiled = deptTagsArray.filter(x => x === 'profiled').length
    const deptPhysAtt = deptTagsArray.filter(x => x === 'physically attacked').length
    const deptHarassed = deptTagsArray.filter(x => x === 'harassed').length
    const deptWronglyAccused = deptTagsArray.filter(x => x === 'wrongly accused').length
    const deptDisrespected = deptTagsArray.filter(x => x === 'disrespected').length
    const deptNeglected = deptTagsArray.filter(x => x === 'neglected').length


    //----compliments----//
    
    //--officer--//
    //total compliments
    const countOfficerComplimentTags = officerTagsArray.filter(x => x === 'helped' || x === 'protected').length

    //average per report
    function avgOfficerCompliments() {
        return(
            countOfficerComplimentTags/(officerTagsArray.length)
        )
    }

    //totals breakdown
    const countOfficerProtectedTags = officerTagsArray.filter(x => x === 'protected').length
    const countOfficerHelpedTags = officerTagsArray.filter(x => x === 'helped').length
    
    //percentages
    const percentProtected = (countOfficerProtectedTags/(countOfficerComplimentTags))*100
    const percentHelped = (countOfficerHelpedTags/(countOfficerComplimentTags))*100

    //data for percentages display
    const complimentsData = [
        { x: 'Protected', y: percentProtected, fill: '#525151'},
        { x: 'Helped', y: percentHelped, fill: '#FFF600'},
    ]

    const complimentLabel = complimentsData.map(compliment => `${compliment.x}: ${compliment.y.toFixed(1)}%`)
    const complimentColors = complimentsData.map(compliment => compliment.fill);

    //--department--//
    const countDeptProtectedTags = deptTagsArray.filter(x => x === 'protected').length
    function countDeptHelpedTags() {
        return(deptTagsArray.filter(x => x === 'helped').length)
    }    
    //total compliments
    const countDeptComplimentTags = deptTagsArray.filter(x => x === 'helped' || x === 'protected').length
    
    //average per report
    function avgDeptCompliments() {
        return(
            countDeptComplimentTags/(deptTagsArray.length)
        )
    }

    //data for bar graph of averages for officer, precinct, dept
    const complimentsAvgData = [
        {group: 'Officer', rating: avgOfficerCompliments(), label: `Officer: ${avgOfficerCompliments().toFixed(2)}`},
        {group: 'Precinct', rating: 0.25, label: `Precinct: ${0.25}`}, 
        {group: 'Department', rating: avgDeptCompliments(), label: `Department: ${avgDeptCompliments().toFixed(2)}`}
    ]

    //--------------------------------------------------//

    //---- RACE CALCULATIONS ----//
    //department
    const reporterRaceDept = departmentData.map(reporter => reporter.race)
    
    //officer
    const reporterRace = officerData.map(reporter => reporter.race)
    
    //breakdown totals
    const countRaceAsian = reporterRace.filter(x => x === 'asian').length
    const countRaceBlack = reporterRace.filter(x => x === 'african american').length
    const countRaceLatinx = reporterRace.filter(x => x === 'latinx').length
    const countRaceMiddleEastern = reporterRace.filter(x => x === 'middle eastern').length
    const countRaceNativeAmerican = reporterRace.filter(x => x === 'native american').length
    const countRacePacificIslander = reporterRace.filter(x => x === 'pacific islander').length
    const countRaceSouthAsian = reporterRace.filter(x => x === 'south asian').length
    const countRaceWhite = reporterRace.filter(x => x === 'white').length
    const countRaceMultiracial = reporterRace.filter(x => x === 'multiracial').length

    //breakdown percent
    function percentAsian() {
        return(
            (countRaceAsian/(officerData.length))*100
        )
    }

    function percentBlack() {
        return(
            (countRaceBlack/(officerData.length))*100
        )
    }

    function percentLatinx() {
        return(
            (countRaceLatinx/(officerData.length))*100
        )
    }

    function percentMiddleEastern() {
        return(
            (countRaceMiddleEastern/(officerData.length))*100
        )
    }

    function percentNativeAmerican() {
        return(
            (countRaceNativeAmerican/(officerData.length))*100
        )
    }

    function percentPacificIslander() {
        return(
            (countRacePacificIslander/(officerData.length))*100
        )
    }

    function percentSouthAsian() {
        return(
            (countRaceSouthAsian/(officerData.length))*100
        )
    }

    function percentWhite() {
        return(
            (countRaceWhite/(officerData.length))*100
        )
    }

    function percentMultiracial() {
        return(
            (countRaceMultiracial/(officerData.length))*100
        )
    }

    //data for race percentage display
    const raceData = [
        { x: 'Pacific Islander', y: percentPacificIslander(), fill: '#6F6F6E'},
        { x: 'Black/African', y: percentBlack(), fill: '#E8E893'},
        { x: 'Latinx', y: percentLatinx(), fill: '#D5D5D5'},
        { x: 'Middle Eastern', y: percentMiddleEastern(), fill: '#BBBABA'},
        { x: 'White', y: percentWhite(), fill: '#FFF600'},
        { x: 'Native American', y: percentNativeAmerican(), fill: '#868685'},
        { x: 'South Asian', y: percentSouthAsian(), fill: '#525151'},
        { x: 'Multiracial', y: percentMultiracial(), fill: '#111111'},
        { x: 'Asian', y: percentAsian(), fill: '#EFD114'},
        ]; 
        console.log("race Data", raceData)
    const raceLabels = raceData.map(race => `${race.x}: ${race.y.toFixed(1)}%` );
    const raceLabelsPercent = raceData.map(race => `${race.y}%` );
    const raceColors = raceData.map(race => race.fill);


    //----------------------------------------------------//

    //custom material UI toggle switch
        const YellowSwitch = withStyles(() => ({
            root: {
                width: 28,
                height: 16,
                padding: 0,
                display: 'flex',
            },
            switchBase: {
                padding: 2,
                color: '',
                '&$checked': {
                    transform: 'translateX(12px)',
                    color: '#fff',
                    '& + $track': {
                    opacity: 1,
                    backgroundColor: '#FAEB00',
                    borderColor: '#FAEB00',
                    },
                },
            },
            thumb: {
                width: 12,
                height: 12,
                boxShadow: 'none',
            },
            track: {
                border: `1px solid #111111`,
                borderRadius: 16 / 2,
                opacity: 1,
                backgroundColor: '#525252',
            },
            checked: {},
        }))(Switch);

    //function to toggle between visual and list views
    const toggleDisplay = (e) => {
        const list = document.getElementById("list-view")
        const display = document.getElementById("visual-view")
        if ( list.style.display === "none"){
            list.style.display = 'block';
            display.style.display = 'none';
        } else {
                list.style.display = 'none';
                display.style.display = 'block';
        }
    }

    return (
        <StatsContainer>
        <FormGroup>
            
            <StatsContentContainer className="page-top">
                {/* toggle */}
                <SwitchContainer >
                <label>List View</label>
                    <YellowSwitch 
                        checked={displayed.checkedA} 
                        onChange={toggleDisplay} 
                        name="display" />
                <label>Visual View</label>
                </SwitchContainer>
            </StatsContentContainer>

            <StatsContentContainer className="totalreports">
                <StatsListContainer >
                <StatsListGrid className="totals">
                    <h2 className="context">Total Reports</h2>
                    <p className="values">{officerData.length}</p>
                </StatsListGrid>
                </StatsListContainer>
            </StatsContentContainer>
            
            
            {/* list view */}
            <div id="list-view">
            <div className="desktop-container">
            <StatsContentContainer>
                <StatsListContainer >
                    <h2 className="average">Average Rating</h2>
                    {/* stats based on slider from form */}
                    <p className="context">Rating Out of 10</p>
                        <StatsListGrid>
                            <p>Officer's Rating</p>
                            <p className="values"> {officerAvgRating().toFixed(2)}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Precinct Average</p>
                            <p className="values">4.00</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Department Average</p>
                            <p className="values"> {departmentAvgRating().toFixed(2)} </p>
                        </StatsListGrid>
                </StatsListContainer>
                </StatsContentContainer>

                <StatsContentContainer className="demographics">
                <StatsListContainer>
                    <h2>Race</h2>
                        <StatsListGrid>
                            <p>Asian</p>
                            <p className="values">{countRaceAsian}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Black/African</p>
                            <p className="values">{countRaceBlack}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Latinx</p>
                            <p className="values">{countRaceLatinx}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Middle Eastern</p>
                            <p className="values">{countRaceMiddleEastern}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Native American</p>
                            <p className="values">{countRaceNativeAmerican}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Pacific Islander</p>
                            <p className="values">{countRacePacificIslander}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>South Asian</p>
                            <p className="values">{countRaceSouthAsian}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>White</p>
                            <p className="values">{countRaceWhite}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Multiracial</p>
                            <p className="values">{countRaceMultiracial}</p>
                        </StatsListGrid>
                </StatsListContainer>
        </StatsContentContainer>
        </div>
        
        <div className="desktop-container">
        <StatsContentContainer>              
        <StatsListContainer className="comps">    
            <h2>Complaints </h2> 
            <h3>Average Per Report</h3>
                <StatsListGrid>
                    <p>Officer Average</p>
                    <p className="values">{avgOfficerComplaint().toFixed(2)}</p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Department Average</p>
                    <p className="values"> {avgDeptComplaint().toFixed(2)} </p>
                </StatsListGrid>

            <StatsDivider />
            <h3>Totals</h3>
                {/* break down of types of complaints */}
                <StatsListGrid>
                    <p>Officer Total</p>
                    <p className="values"> {countOfficerComplaintTags} </p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Department Total</p>
                    <p className="values">{countDeptComplimentTags}</p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Illegally Searched</p>
                    <p className="values">{officerIllegalSearch}</p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Profiled</p>
                    <p className="values">{officerProfiled}</p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Physically Attacked</p>
                    <p className="values">{officerPhysAtt}</p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Harrassed</p>
                    <p className="values">{officerHarassed}</p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Wrongly Accused</p>
                    <p className="values">{officerWronglyAccused}</p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Disrespected</p>
                    <p className="values">{officerDisrespected}</p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Neglected</p>
                    <p className="values">{officerNeglected}</p>
                </StatsListGrid>
        </StatsListContainer>
        {/* closes negative reports */}
        </StatsContentContainer>

        <StatsContentContainer>
        <StatsListContainer className="comps">
            <h2 >Compliments </h2>
            {/* total compliments for officer */}
            <h3>Average Per Report </h3>

                <StatsListGrid>
                    <p>Average Compliments</p>
                    <p className="values">{avgOfficerCompliments().toFixed(2)}</p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Department Average </p>
                    <p className="values">{avgDeptCompliments().toFixed(2)}</p>
                </StatsListGrid>
            <StatsDivider />
            <h3>Totals </h3>
                <StatsListGrid>
                    <p>Officer Total</p>
                    <p className="values">{countOfficerComplimentTags}</p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Department Total </p>
                    <p className="values">{countDeptComplimentTags}</p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Helped</p>
                    <p className="values">{countOfficerHelpedTags}</p>
                </StatsListGrid>
                <StatsListGrid>
                    <p>Protected</p>
                    <p className="values">{countOfficerProtectedTags}</p>
                </StatsListGrid>
        </StatsListContainer>
        </StatsContentContainer>
        {/* closes positive reports */}
        </div>
        {/* closes list view */}
        </div>



        {/* visual view */}
        <StatsContentContainer className="displayView" id="visual-view">
        <StatsVisualContainer >
        <h2 className="average">Average Rating </h2>
            <BarContainer>
                <VictoryStack
                    horizontal
                    desc={"Bar Graph depicting average rating for officer, precinct and department" }
                    domainPadding={20}
                    padding={{ top: -200, bottom: 40, left: 20, right: 100 }}
                    style={{
                        data:{width: 30}
                    }}
                >
                    <VictoryBar 
                        style={{ data: { fill: '#111111', stroke: "#111111", strokeWidth: 2}, labels: { fill: "#111111"} }} 
                        alignment="middle"
                        labelComponent={
                            <VictoryPortal>
                                <VictoryLabel/>
                            </VictoryPortal>}
                        data={ratingData}
                            x='group'
                            y='rating'
                            y0='0'
                    />
                    <VictoryBar
                        style={{ data: { fill: '#fff', stroke: '#111111', strokeWidth: 2} }}
                        data={[
                            { x: 'Officer Rating', y: 10, y0: 1},
                            { x: 'Precinct Rating', y: 10, y0: 1},
                            { x: 'Department Rating', y: 10, y0: 1},
                        ]}
                        labels={({ datum }) => datum.x}
                        labelComponent={
                            <VictoryPortal>
                                <VictoryLabel
                                    verticalAnchor={"middle"}
                                />
                            </VictoryPortal>}
                    />
                </VictoryStack>
            </BarContainer>
        </StatsVisualContainer>

        <StatsVisualContainer>
                <h2>Race</h2>
                <PieContainer>
                    <VictoryPie
                        desc={"pie Graph depicting reporter race by percentage"}
                        style={{ labels: { fill: "#111111" } }}
                        innerRadius={75}
                        colorScale={raceColors}
                        data={raceData}
                        labels={raceLabels}
                        labelComponent={
                            <VictoryTooltip
                                verticalAnchor="middle"
                                x={200} y={250}
                                orientation="top"
                                pointerLength={10}
                                flyoutWidth={130}
                                flyoutHeight={50}
                                flyoutStyle={{ fill: "#fff", stroke: "#111111", strokeWidth: 2 }}
                            />}
                    />
                </PieContainer>
        </StatsVisualContainer>
            {/* closes race */}
            
            
            <div className="report-type">                
            <StatsVisualContainer className="comps" >
                <h2>Complaints </h2>
                <h3>Average Per Report</h3>
                <BarContainer>
                    <VictoryBar
                        horizontal
                        desc={"Bar Graph depicting average complaints per report for officer, precinct and department" }
                        domainPadding={100}
                        padding={{ top: 0, bottom: 0, left: 20, right: 80 }}
                        style={{ data: { fill: '#111111', stroke: "#111111", strokeWidth: 2}, labels: { fill: "#111111"} }} 
                        alignment="middle"
                        labels= {({ datum }) => datum.y}
                        labelComponent={
                            <VictoryPortal>
                                <VictoryLabel/>
                            </VictoryPortal>}
                        data={complaintsAvgData}
                            x='group'
                            y='rating'
                            y0='0'
                    />
            </BarContainer>
                <h3>Type</h3>
                <PieContainer>
                    <VictoryPie
                        desc={"pie Graph depicting complaint percentages by type"}
                        style={{ labels: { fill: "#111111"  }}}
                        innerRadius={75}
                        colorScale={complaintColors}
                        data={complaintsData}
                        labels={complaintLabels}
                        labelComponent={
                            <VictoryTooltip
                                verticalAnchor="middle"
                                x={200} y={250}
                                orientation="top"
                                pointerLength={10}
                                flyoutWidth={160}
                                flyoutHeight={50}
                                flyoutStyle={{ fill: "#fff", stroke: "#111111", strokeWidth: 2 }}
                                />}
                    />
                </PieContainer>
            </StatsVisualContainer>
            {/* closes negative reports */}
            
            <StatsVisualContainer className="comps">
                <h2 >Compliments</h2>
                <h3>
                    Average Per Report
                </h3>
                <BarContainer>
                    <VictoryBar
                        horizontal
                        desc={"Bar Graph depicting average compliments per report for officer, precinct and department" }
                        domainPadding={100}
                        padding={{ top: 0, bottom: 0, left: 20, right: 80 }}
                        style={{ data: { fill: '#111111', stroke: "#111111", strokeWidth: 2}, labels: { fill: "#111111"} }} 
                        alignment="middle"
                        labels= {({ datum }) => datum.y}
                        labelComponent={
                            <VictoryPortal>
                                <VictoryLabel/>
                            </VictoryPortal>}
                        data={complimentsAvgData}
                            x='group'
                            y='rating'
                            y0='0'
                    />
            </BarContainer>
                <h3>
                    Type
                </h3>
                <PieContainer>
                    <VictoryPie
                        desc={"pie Graph depicting compliment percentages by type"}
                        style={{ labels: { fill: "#111111" } }}
                        innerRadius={75}
                        colorScale={complimentColors}
                        data={complimentsData}
                        labels={complimentLabel}
                        labelComponent={
                            <VictoryTooltip
                                verticalAnchor="middle"
                                x={200} y={250}
                                orientation="top"
                                pointerLength={10}
                                flyoutWidth={130}
                                flyoutHeight={50}
                                flyoutStyle={{ fill: "#fff", stroke: "#111111", strokeWidth: 2 }}
                            />}
                    />
                </PieContainer>
            </StatsVisualContainer>
            {/* closes positive reports */}
        </div>
        {/* closes report-type */}
        
    </StatsContentContainer>
    {/* closes visual view */}

    {/* <StatsContentContainer>
        <StatsVisualContainer className="reports">
            <h2>Reports Per Day</h2>

            <div className="date-tags">
                    // date picker? or something? 
            </div>

            <VictoryChart>
            <VictoryAxis tickCount={8}/>
            <VictoryBar
                data={[              
                    { x: 'Sun', y: 5 },
                    { x: 'Mon', y: 4 },
                    { x: 'Tues', y: 2 },
                    { x: 'Wed', y: 3 },
                    { x: 'Thurs', y: 1 },
                    { x: 'Fri', y: 4 },
                    { x: 'Sat', y: 6 },
                ]}
                labels= {({ datum }) => datum.y}
                style={{ data: { fill: "#FFF600", stroke: "black", strokeWidth: 2 }}}
            />
            </VictoryChart>
        </StatsVisualContainer>
    </StatsContentContainer> */}
    {/* closes report date */}

    </FormGroup>
    {/* closes toggle switch form */}
    </StatsContainer>
    // closes container
    )
}
