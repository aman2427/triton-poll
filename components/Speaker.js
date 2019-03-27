const React = require('react');
const Display = require('./parts/Display');
const JoinSpeaker = require('./parts/JoinSpeaker');
const Attendance = require('./parts/Attendance');
const Questions = require('./parts/Questions');

export default class Speaker extends React.Component {
    render(){
        return (
            <div>
                <Display if={this.props.status === 'connected'}>

                    <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
                        <Questions emit={this.props.emit} questions={this.props.questions} />
                        <Attendance audience={this.props.audience} />
                    </Display>

                    <Display if={!this.props.member.name}>
                        <h3>Start the presentation: </h3>
                        <JoinSpeaker  emit={this.props.emit} />
                    </Display>

                </Display>
            </div>
        );
    }
};
