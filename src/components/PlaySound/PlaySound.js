import { Component } from "react";

export default class PlaySound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false,
            audio : null,
        };
    }

    componentDidMount() {
        this.state.audio = new Audio(this.props.url);
        this.state.audio.play().catch(
                    () => {}
                );
    }

    render() {
        return(
            <div className="audio-player"></div>
        )
        
    }
}
