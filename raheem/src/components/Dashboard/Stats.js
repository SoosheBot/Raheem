import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//data visualization libraru
import CustomLabel from './CustomLabel';
import { VictoryPie, VictoryTooltip, VictoryBar, VictoryStack, VictoryChart, VictoryAxis } from 'victory';

//global styles
import { Tag } from '../../styles/tags';
import { SwitchContainer, StatsContainer, StatsContentContainer, StatsListContainer, StatsDivider, StatsListGrid, StatsVisualContainer, PieContainer  } from '../../styles/dashboard/statsStyles'

//other styles
import { Switch, Grid, FormGroup, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

//*FireStore*
import firebase from '../../config/firebase';

export default function Stats(props) {
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

    //data manipulation for stats
    console.log("Officer Data", officerData)
    console.log("Department Data", departmentData)
    // console.log("Precinct Data", precinctData)
    
    //average rating
    function officerAvg() {
    const getOfficerRatings = officerData.reduce((acc, officer) => acc + officer.rating, 0);
            return(
                (getOfficerRatings)/
                (officerData.length)
            );
    }

    function departmentAvg() {
        const getDeptRatings = departmentData.reduce((acc, officer) => acc + officer.rating, 0);

                return(
                    (getDeptRatings)/
                    (departmentData.length)
                );
    }

    
    // //average precinct rating
    // const precAvgEmpty = []
    // const precRatingArray = precinctData.map((data) => {
    //     return precAvgEmpty.push(data.rating)
    // })
    // function precAvg() { 
    // const getprecAvg = precRatingArray.reduce((acc, c) => acc + c, 0);
    //     return (
    //         getprecAvg/
    //         precRatingArray.length
    //     )
    // }

    //average department rating

    //complaint avg
    
    //dept complaint avg

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
                    <h2 className="context">Average Rating</h2>
                    {/* stats based on slider from form */}
                    <p className="context">Rating Out of 10</p>
                        <StatsListGrid>
                            <p>Officer's Rating</p>
                            <p className="values"> {officerAvg()}</p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Precinct Average</p>
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Department Average</p>
                            <p className="values"> {departmentAvg()} </p>
                        </StatsListGrid>
                </StatsListContainer>
            
            <div className="report-type">                    
            <StatsListContainer>    
                <h2>Complaints </h2> 
                <h3>Average of Complaints</h3>
                        <StatsListGrid>
                            <p>Total Complaints</p>
                            <p className="values"> </p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Average Complaints</p>
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Department Average</p>
                            <p className="values">  </p>
                        </StatsListGrid>
                <StatsDivider />
                <h3>Complaint Total by Type</h3>
                    {/* break down of types of complaints */}
                    <StatsListGrid>
                        <p>Profiled</p>
                        <p className="values"></p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Harrassed</p>
                        <p className="values"></p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Neglected</p>
                        <p className="values"></p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Disrespected</p>
                        <p className="values"></p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Physically Attacked</p>
                        <p className="values"></p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Wrongly Accused</p>
                        <p className="values"></p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Illegally Searched</p>
                        <p className="values"></p>
                </StatsListGrid>
            </StatsListContainer>
            {/* closes negative reports */}
            
            <StatsListContainer>
                <h2 >Compliments </h2>
               {/* total compliments for officer */}
                <h3>Average of Compliments </h3>
                <StatsListGrid>
                        <p>Total Compliments</p>
                        <p className="values"></p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Average Compliments</p>
                        <p className="values"></p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Department Average </p>
                        <p className="values"></p>
                </StatsListGrid>
                <StatsDivider />
                <h3>Compliment Total by Type </h3>
                    <StatsListGrid>
                        <p>Helped</p>
                        <p className="values"></p>
                    </StatsListGrid>
                    <StatsListGrid>
                        <p>Protected</p>
                        <p className="values"></p>
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
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Black/African</p>
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Latinx</p>
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Middle Eastern</p>
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Native American</p>
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Pacific Islander</p>
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>South Asian</p>
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>White</p>
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Multiracial</p>
                            <p className="values"></p>
                        </StatsListGrid>
                </StatsListContainer>
        </StatsContentContainer>
        {/* closes list view */}
        </div>



        {/* visual view */}
        <StatsContentContainer className="displayView" id="visual-view">
        <StatsVisualContainer>
        <h2>Average Overall Rating </h2>
            <div>
            <VictoryChart
                domainPadding={{ x: 10 }}
                >
                <VictoryStack horizontal
                    colorScale={['#242424', '#fff']}>
                        

                </VictoryStack>
                <VictoryAxis dependentAxis
                    tickFormat={(tick) => `${tick}`}
                    />
                    <VictoryAxis
                    tickFormat={["Officer Rating", "Precinct Rating", "Department Rating",]}
                    />
                </VictoryChart>
            </div>
            </StatsVisualContainer>
            
            
            <div className="report-type">                
            <StatsVisualContainer className="visneg">
                <h2>Complaints </h2>
                <h3>Averages</h3>
                <div>
                    <VictoryChart
                        domainPadding={{ x: 10 }}
                        >
                        <VictoryStack horizontal
                            colorScale={['#242424', '#fff']}>
                                

                        </VictoryStack>
                        <VictoryAxis dependentAxis
                            tickFormat={(tick) => `${tick}`}
                            />
                            <VictoryAxis
                            tickFormat={["Officer Rating", "Precinct Rating", "Department Rating",]}
                            />
                    </VictoryChart>
                </div>
                <h3>Type</h3>
                <PieContainer>
                    <VictoryPie
                        style={{ labels: { fill: "white" } }}
                        innerRadius={100}
                        labelRadius={120}
                        labels={({ datum }) => `# ${datum.y}`}
                        labelComponent={<CustomLabel />}
                        data={[
                            // set this to data from firebase
                            { x: 1, y: 5 },
                            { x: 2, y: 4 },
                            { x: 3, y: 2 },
                            { x: 4, y: 3 },
                            { x: 5, y: 1 }
                    ]}
                    />
                </PieContainer>
            </StatsVisualContainer>
            {/* closes negative reports */}
            
            <StatsVisualContainer className="vispos">
                <h2 >Compliments</h2>
                <h3>
                    Averages
                </h3>
                <div>
                    <VictoryChart
                        domainPadding={{ x: 10 }}
                        >
                        <VictoryStack horizontal
                            colorScale={['#242424', '#fff']}>
                                

                        </VictoryStack>
                        <VictoryAxis dependentAxis
                            tickFormat={(tick) => `${tick}`}
                            />
                            <VictoryAxis
                            tickFormat={["Officer Rating", "Precinct Rating", "Department Rating",]}
                            />
                    </VictoryChart>
                </div>
                <h3>
                    Type
                </h3>
                <PieContainer>
                    <VictoryPie
                        style={{ labels: { fill: "white" } }}
                        innerRadius={100}
                        labelRadius={120}
                        labels={({ datum }) => `# ${datum.y}`}
                        labelComponent={<CustomLabel />}
                        data={[
                            // set this to data from firebase
                            { x: 1, y: 5 },
                            { x: 2, y: 4 },
                            { x: 3, y: 2 },
                            { x: 4, y: 3 },
                            { x: 5, y: 1 }
                    ]}
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
                        data={[
                            // set this to data from firebase
                            { x: 1, y: 5 },
                            { x: 2, y: 4 },
                            { x: 3, y: 2 },
                            { x: 4, y: 3 },
                            { x: 5, y: 1 }
                    ]}
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
