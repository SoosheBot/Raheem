import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//data visualization libraru
import CustomLabel from './CustomLabel';
import { VictoryPie, VictoryTooltip, VictoryBar, VictoryChart, VictoryAxis } from 'victory';

//global styles
import { HeadingContainer } from '../../styles/global'
import { Tag } from '../../styles/tags';
import { SwitchContainer, StatsContainer, StatsContentContainer, StatsListContainer, StatsListGrid, StatsVisualContainer  } from '../../styles/dashboard/statsStyles'

//other styles
import { Switch, Grid, FormGroup, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

//*FireStore*
import firebase from '../../config/firebase';

export default function Stats(props) {
    //sets events to custom tooltip
    CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

    //toggle switch
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
    //toggle state for positive v negative interactions
    const [positivity, setPositivity] = useState(false);
    //state to set report data
    const [reportData, setReportData] = useState([]);

    //params to match officer to reports
    const params = useParams();
    const { officerBadgeID } = props;

    //set data to state from firebase
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
                setReportData(statsData);
                console.log('stats data call', statsData)
            })
            .catch(err => {
                console.log('FAIL');
            })
    }, [officerBadgeID]);


   //function to toggle between positive and negative interactions
    const togglePositivity = (e) => {
        e.preventDefault(); // prevent default refresh from button clicks
        e.target.classList.toggle("toggled"); // toggle the 'toggled' class for styling when clicked
    }
    

    //function to toggle between visual and list views
    const toggleDisplay = (e) => {
        e.target.classList.toggle("list-view"); // toggle the 'toggled' class for styling when clicked
    }

    return (
        <StatsContainer>
        <FormGroup>
        <StatsContentContainer className="page-top">
        {/* toggle */}
            <SwitchContainer>
            <label>List View</label>
                <YellowSwitch 
                    checked={displayed.checkedA} 
                    onChange={toggleDisplay} 
                    name="display" />
            <label>Visual View</label>
            </SwitchContainer>

            <div className="tags">
                <Tag>Negative Interactions</Tag>
                <Tag>Positive Interactions</Tag>
            </div>
        </StatsContentContainer>

        {/* list view */}
        <StatsContentContainer className="list-view">
            <StatsListContainer className="report-type">
            {/* dynamically render compliments with positivity toggle */}

            <div>    
                <h3>Complaints </h3> 
                <p className="values"> 
                    
                </p>
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
            </div>
            {/* closes negative reports */}
            
                <div className="positivity">
                    <h3 >Compliments</h3>
                    <StatsListGrid>
                        <p>Helped</p>
                        <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                        <p>Protected</p>
                        <p className="values"></p>
                    </StatsListGrid>
                </div>
                {/* closes positive reports */}
            </StatsListContainer>
            </StatsContentContainer>
            
                <StatsContentContainer className="demographics">
                <StatsListContainer>
                    <h3>Race</h3>

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

                <StatsListContainer>
                <h3>Gender</h3>
                    <StatsListGrid>
                        <p>Female</p>
                        <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                        <p>Male</p>
                        <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                        <p>Non-Binary</p>
                        <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                        <p>Self-Identify</p>
                        <p className="values"></p>
                    </StatsListGrid>
                </StatsListContainer>

                <StatsListContainer>
                <h3>Age</h3>
                    <StatsListGrid>
                        <p>18-25</p>
                        <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                        <p>26-35</p>
                        <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                        <p>36-45</p>
                        <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                        <p>46-55</p>
                        <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                        <p>56-65</p>
                        <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                        <p>66-75</p>
                        <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                        <p>75+</p>
                        <p className="values"></p>
                    </StatsListGrid>

                </StatsListContainer>
        </StatsContentContainer>
        {/* closes list view */}


        {/* visual view */}
        <div className="visual-view">
        <div className="report-type">
            {/* dynamically render compliments with positivity toggle */}
            
            <div>
                <h3>Complaints </h3>
                <div>
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
                </div>
            </div>
            {/* closes negative reports */}
            
            <div>
                <h3 className="positivity">Compliments</h3>
                <div>
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
                </div>
            </div>
            {/* closes positive reports */}
        </div>
        {/* closes report-type */}
        
        <div className="visual, demographics">
            <div>
                <h3>Race</h3>
                <div>
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
                </div>
            </div>
            {/* closes race */}

            <div>
                <h3>Gender</h3>
                <div>
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
                </div>
            </div>
            {/* closes gender */}

            <div>
                <h3>Age</h3>
                <div>
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
                </div>
            </div>
            {/* closes age */}
        </div>
        {/* closes demographics */}
        </div>
        {/* closes visual view */}

            <StatsContentContainer>
            <h3>Report Date</h3>
                <div>
                    <div className="tags">
                    View: 
                    <Tag>Day</Tag>
                    <Tag>Month</Tag>
                    <Tag>Year</Tag>
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
                </div>
            </StatsContentContainer>
            {/* closes report date */}



        </FormGroup>
        {/* closes toggle switch form */}
        </StatsContainer>
        // closes container
    )
}
