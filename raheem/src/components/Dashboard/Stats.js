import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//data visualization libraru
import CustomLabel from './CustomLabel';
import { VictoryPie, VictoryTooltip, VictoryBar, VictoryStack, VictoryChart, VictoryAxis, VictoryLabel, VictoryPortal } from 'victory';

//global styles
import { Tag } from '../../styles/tags';
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
            {group: 'Precinct Rating', rating: 5.25, label: "5.25"},
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

    //data for bar graph of averages
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
    
    //precentages data for pie chart
    const complaintsData = [
        { complaint: 'Illegally Searched', percentage: percentIllegalSearch.toFixed(1), fill: '#111111'},
        { complaint: 'Profiled', percentage: percentProfiled.toFixed(1), fill: '#EFD114'},
        { complaint: 'Physically Attacked', percentage: percentPhysAtt.toFixed(1), fill: '#868685'},
        { complaint: 'Harrassed', percentage: percentHarassed.toFixed(1), fill: '#E8E893'},
        { complaint: 'Wrongly Accused', percentage: percentWronglyAccused.toFixed(1), fill: '#6F6F6E'},
        { complaint: 'Disrespected', percentage: percentDisrespected.toFixed(1), fill: '#BBBABA'},
        { complaint: 'Neglected', percentage: percentNeglected.toFixed(1), fill: '#D5D5D5'},
    ] 

    const complaintColors = complaintsData.map(complaint => complaint.fill);
        console.log("colors", complaintColors)

console.log(complaintsData)

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
        { compliment: 'Protected', percentage: percentProtected.toFixed(1), fill: '#525151'},
        { compliment: 'Helped', percentage: percentHelped.toFixed(1), fill: '#FFF600'},
    ]

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
        { race: 'Asian', percentage: percentAsian().toFixed(1), fill: '#EFD114'},
        { race: 'Black/African', percentage: percentBlack().toFixed(1), fill: '#E8E893'},
        { race: 'Latinx', percentage: percentLatinx().toFixed(1), fill: '#D5D5D5'},
        { race: 'Middle Eastern', percentage: percentMiddleEastern().toFixed(1), fill: '#BBBABA'},
        { race: 'Native American', percentage: percentNativeAmerican().toFixed(1), fill: '#868685'},
        { race: 'Pacific Islander', percentage: percentPacificIslander().toFixed(1), fill: '#6F6F6E'},
        { race: 'South Asian', percentage: percentSouthAsian().toFixed(1), fill: '#525151'},
        { race: 'White', percentage: percentWhite().toFixed(1), fill: '#FFF600'},
        { race: 'Multiracial', percentage: percentMultiracial().toFixed(1), fill: '#111111'},
    ] 
    //----------------------------------------------------//

    //sets events to custom tooltip
    CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

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
            
            {/* list view */}
            <div id="list-view">
            <StatsContentContainer>
                <StatsListContainer>
                <StatsListGrid className="totals">
                    <h2 className="context">Total Reports</h2>
                    <p className="values">{officerData.length}</p>
                </StatsListGrid>
                </StatsListContainer>
                <StatsListContainer>
                    <h2 className="context">Average Rating</h2>
                    {/* stats based on slider from form */}
                    <p className="context">Rating Out of 10</p>
                        <StatsListGrid>
                            <p>Officer's Rating</p>
                            <p className="values"> {officerAvgRating().toFixed(2)}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Precinct Average</p>
                            <p className="values">0</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Department Average</p>
                            <p className="values"> {departmentAvgRating().toFixed(2)} </p>
                        </StatsListGrid>
                </StatsListContainer>
            
            <div className="report-type">                    
            <StatsListContainer>    
                <h2>Complaints </h2> 
                <h3>Average of Complaints</h3>
                        <StatsListGrid>
                            <p>Total Complaints</p>
                            <p className="values"> {countOfficerComplaintTags} </p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Average Per Report</p>
                            <p className="values">{avgOfficerComplaint().toFixed(2)}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Department Total </p>
                            <p className="values">{countDeptComplimentTags}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Dept. Average Per Report</p>
                            <p className="values"> {avgDeptComplaint().toFixed(2)} </p>
                        </StatsListGrid>
                <StatsDivider />
                <h3>Complaint Totals by Type</h3>
                    {/* break down of types of complaints */}
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
            
            <StatsListContainer>
                <h2 >Compliments </h2>
               {/* total compliments for officer */}
                <h3>Average of Compliments </h3>
                    <StatsListGrid>
                        <p>Total Compliments</p>
                        <p className="values">{countOfficerComplimentTags}</p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Average Per Report</p>
                        <p className="values">{avgOfficerCompliments().toFixed(2)}</p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Department Total </p>
                        <p className="values">{countDeptComplimentTags}</p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Dept. Average Per Report </p>
                        <p className="values">{avgDeptCompliments().toFixed(2)}</p>
                    </StatsListGrid>
                <StatsDivider />
                <h3>Compliment Totals by Type </h3>
                    <StatsListGrid>
                        <p>Helped</p>
                        <p className="values">{countOfficerHelpedTags}</p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Protected</p>
                        <p className="values">{countOfficerProtectedTags}</p>
                    </StatsListGrid>
            </StatsListContainer>
            {/* closes positive reports */}
            </div>
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
        {/* closes list view */}
        </div>



        {/* visual view */}
        <StatsContentContainer className="displayView" id="visual-view">
        <StatsVisualContainer>
        <h2>Average Overall Rating </h2>
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
                        categories={{
                            x: ["birds", "cats", "dogs"]}}
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
            
            
            <div className="report-type">                
            <StatsVisualContainer >
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
                        style={{ labels: { fill: "white" } }}
                        innerRadius={100}
                        labelRadius={120}
                        labels={({ datum }) => `# ${datum.y}`}
                        labelComponent={<CustomLabel />}
                        data={complaintsData}
                            x='complaint'
                            y='percentage'
                    />
                </PieContainer>
            </StatsVisualContainer>
            {/* closes negative reports */}
            
            <StatsVisualContainer className="vispos">
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
                        style={{ labels: { fill: "white" } }}
                        colorScale={complimentColors}
                        innerRadius={100}
                        labelRadius={120}
                        labels={({ datum }) => `${datum.y}%`}
                        labelComponent={<CustomLabel />}
                        data={complimentsData}
                            x='compliment'
                            y='percentage'
                    />
                </PieContainer>
            </StatsVisualContainer>
            {/* closes positive reports */}
        </div>
        {/* closes report-type */}
        


        <div className="demographics">
            <StatsVisualContainer>
                <h2>Race</h2>
                <PieContainer>
                    <VictoryPie
                        style={{ labels: { fill: "white" } }}
                        innerRadius={100}
                        labelRadius={120}
                        labels={({ datum }) => `# ${datum.y}`}
                        labelComponent={<CustomLabel />}
                        data={raceData}
                            x='race'
                            y='percentage'
                    />
                </PieContainer>
            </StatsVisualContainer>
            {/* closes race */}
        </div>
        {/* closes demographics */}
    </StatsContentContainer>
    {/* closes visual view */}

    <StatsContentContainer>
        <StatsVisualContainer>
            <h2>Report Date</h2>

                    <div className="date-tags">

                    </div>

                    <VictoryChart>
                    <VictoryAxis tickCount={8}/>
                    <VictoryBar
                        data={[              
                            { x: 1, y: 5 },
                            { x: 2, y: 4 },
                            { x: 3, y: 2 },
                            { x: 4, y: 3 },
                            { x: 5, y: 1 }]}
                        style={{ data: { fill: "#FFF600", stroke: "black", strokeWidth: 2 }}}
                    />
                    </VictoryChart>
                </StatsVisualContainer>
    </StatsContentContainer>
    {/* closes report date */}

    </FormGroup>
    {/* closes toggle switch form */}
    </StatsContainer>
    // closes container
    )
}
