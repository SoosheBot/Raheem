import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//data visualization libraru
import CustomLabel from './CustomLabel';
import { VictoryPie, VictoryTooltip, VictoryBar, VictoryChart, VictoryAxis } from 'victory';

//global styles
import { } from '../../styles/global'
import { Tag } from '../../styles/tags';

//other styles
import { Switch, Grid,FormGroup, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';
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
                    backgroundColor: '#FFF600',
                    borderColor: '#111111',
                    },
                },
            },
            thumb: {
                width: 12,
                height: 12,
                boxShadow: 'none',
            },
            track: {
                border: `1px solid #000000`,
                borderRadius: 16 / 2,
                opacity: 1,
                backgroundColor: '#111111',
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
        e.target.classList.toggle("toggled"); // toggle the 'toggled' class for styling when clicked
    }

    return (
        <div>
        <FormGroup>
        
        {/* toggle */}
        <div>
        <label>List</label>
            <YellowSwitch 
                checked={displayed.checkedA} 
                onChange={toggleDisplay} 
                name="display" />
        <label>Display</label>
        </div>

        <div className="tags">
            <Tag>Negative Interactions</Tag>
            <Tag>Positive Interactions</Tag>
        </div>

        {/* list view */}
        <div className="list-view">
            <div className="report-type">
            {/* dynamically render compliments with positivity toggle */}

            <div>    
                <h2>Complaints </h2>
                <div>
                    <p>Profiled</p>
                    <p>Harrassed</p>
                    <p>Neglected</p>
                    <p>Disrespected</p>
                    <p>Physically Attacked</p>
                    <p>Wrongly Accused</p>
                    <p>Illegally Searched</p>
                </div>
            </div>
            {/* closes negative reports */}
            
                <div className="positivity">
                    <h2 >Compliments</h2>
                    <div>
                        <p>Helped</p>
                        <p>Protected</p>
                    </div>
                </div>
                {/* closes positive reports */}
            </div>
            {/* closes report-type */}
            
            <div className="demographics">
                <div>
                    <h2>Race</h2>
                    <div>
                        <p>Asian</p>
                        <p>Black/African</p>
                        <p>Latinx</p>
                        <p>Middle Eastern</p>
                        <p>Native American</p>
                        <p>Pacific Islander</p>
                        <p>South Asian</p>
                        <p>White</p>
                        <p>Multiracial</p>
                        <p>Prefer Not to Say</p>
                    </div>
                </div>

                <div>
                <h2>Gender</h2>
                    <div>
                        <p>Female</p>
                        <p>Male</p>
                        <p>Non-Binary</p>
                        <p>Self-Identify</p>
                    </div>

                </div>

                <div>
                <h2>Age</h2>
                    <div>
                        <p>18-25</p>
                        <p>26-35</p>
                        <p>36-45</p>
                        <p>46-55</p>
                        <p>56-65</p>
                        <p>66-75</p>
                        <p>75+</p>
                    </div>

                </div>
            </div>

        </div>
        {/* closes list view */}


        {/* visual view */}
        <div className="visual-view">
        <div className="report-type">
            {/* dynamically render compliments with positivity toggle */}
            <div>
                <h2>Complaints </h2>
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
                <h2 className="positivity">Compliments</h2>
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
        <h2>Demographics</h2>
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

            <div>
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
            </div>
            {/* closes report date */}



        </FormGroup>
        {/* closes toggle switch form */}
        </div>
        // closes container
    )
}
