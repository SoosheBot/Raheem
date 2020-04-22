import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//data visualization libraru
import CustomLabel from './CustomLabel';
import { VictoryPie, VictoryTooltip, VictoryBar, VictoryChart, VictoryAxis } from 'victory';

//global styles
import { HeadingContainer } from '../../styles/global'
import { Tag } from '../../styles/tags';
import { SwitchContainer, StatsContainer, StatsContentContainer, StatsListContainer, StatsListGrid, StatsVisualContainer, PieContainer  } from '../../styles/dashboard/statsStyles'

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
    const [toggledTags, setToggledTags] = useState([]);
    
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
    const toggleTag = (e) => {
        e.preventDefault(); // prevent default refresh from button clicks

    }

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

    //list view positive and negative toggle
    const negative = document.getElementsByClassName("neg")[0]
    const positive = document.getElementsByClassName("pos")[0]

    const togglePositive = (e) => {
        e.preventDefault();
        if (positive.style.display === 'block'){
            positive.style.display = 'block';
            negative.style.display = 'none';
        } else if(positive.style.display === "none") {
            positive.style.display = 'block';
            negative.style.display = 'none';
        } else {
            negative.style.display = 'none';
        }
    }

    const toggleNegative = (e) => {
        e.preventDefault();
        if (negative.style.display === 'block'){
            negative.style.display = 'block';
            positive.style.display = 'none';
        } else if(negative.style.display === "none") {
            negative.style.display = 'block';
            positive.style.display = 'none';
        } else {
            positive.style.display = 'none';
        }
    }

    //visual view positive and negative toggle
    const visnegative = document.getElementsByClassName("visneg")[0]
    const vispositive = document.getElementsByClassName("vispos")[0]

    const toggleVisPositive = (e) => {
        e.preventDefault();
        if (vispositive.style.display === 'block'){
            vispositive.style.display = 'block';
            visnegative.style.display = 'none';
        } else if(vispositive.style.display === "none") {
            vispositive.style.display = 'block';
            visnegative.style.display = 'none';
        } else {
            visnegative.style.display = 'none';
        }
    }

    const toggleVisNegative = (e) => {
        e.preventDefault();
        if (visnegative.style.display === 'block'){
            visnegative.style.display = 'block';
            vispositive.style.display = 'none';
        } else if(visnegative.style.display === "none") {
            visnegative.style.display = 'block';
            vispositive.style.display = 'none';
        } else {
            vispositive.style.display = 'none';
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
                    <h3>Rating</h3>
                        <StatsListGrid>
                            <p>Officer's Rating</p>
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Precint Average</p>
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Department Average</p>
                            <p className="values"></p>
                        </StatsListGrid>
                        <StatsListGrid>
                            <p>Self-Identify</p>
                            <p className="values"></p>
                        </StatsListGrid>
                </StatsListContainer>
            
            <StatsListContainer className="report-type">
            <div className="tags">
                <Tag onClick={toggleNegative}>Negative Interactions</Tag>
                <Tag onClick={togglePositive}>Positive Interactions</Tag>
            </div>            
            {/* dynamically render compliments with positivity toggle */}
            <div className="neg">    
                <h3>Complaints </h3> 
                {/* total complaints for officer */}
                <p className="values"> TOTAL</p>

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
            </div>
            {/* closes negative reports */}
            
            <div className="pos">
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
        </div>





        {/* visual view */}
        <div id="visual-view">
    
            <div>
                {/* ranking visualization */}
            </div>
            <div className="report-type">
            <div className="tags">
                <Tag onClick={toggleVisNegative}>Negative Interactions</Tag>
                <Tag onClick={toggleVisPositive}>Positive Interactions</Tag>
            </div>

            <div className="visneg">
                <h3>Complaints </h3>
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
            </div>
            {/* closes negative reports */}
            
            <div className="vispos">
                <h3 >Compliments</h3>
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
            </div>
            {/* closes positive reports */}
        </div>
        {/* closes report-type */}
        
        <div className="demographics">
            <div>
                <h3>Race</h3>
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
            </div>
            {/* closes race */}

            <div>
                <h3>Gender</h3>
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
            </div>
            {/* closes gender */}

            <div>
                <h3>Age</h3>
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
            </div>
            {/* closes age */}
        </div>
        {/* closes demographics */}
    </div>
    {/* closes visual view */}

            <StatsContentContainer>
            <h3>Report Date</h3>
                <div>
                    <div className="date-tags">
                    <p className="date-tags">View: </p>
                    <Tag onclick={toggleTag}>Day</Tag>
                    <Tag onclick={toggleTag}>Month</Tag>
                    <Tag onclick={toggleTag}>Year</Tag>
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
