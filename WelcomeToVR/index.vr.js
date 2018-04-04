import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render(){
    return (
      <View>
        <Pano source={asset('FreeGreatPicture.com-7768-degree-seamless-panoramic.jpg')}/>
        <NestedMessage/>
      </View>
    );
  }
};

class NestedMessage extends React.Component {
  constructor() {
    super();
    this.state = {message: "Hello State Message", showMessage: true};
  }

  componentDidMount () {
    this.setState({ showMessage: true });
  }

  handleClick () {
    this.setState({ message: "Updated Message" });
  }

  render() {
    const showMessage = this.state.showMessage;

    return (
      <View>
        {showMessage ? (
          <VrButton
            onClick={this.handleClick.bind(this)}
          >
            <Text
              style={{
                backgroundColor: '#777879',
                fontSize: 0.8,
                fontWeight: '400',
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [0, 0, -5]}],
              }}>
            {this.state.message}
            </Text>
          </VrButton>
        ) : (
          <Text></Text>
        )}
      </View>
    );
  }
};


AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);











