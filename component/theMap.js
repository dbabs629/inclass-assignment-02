import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default class theMap extends React.Component {
  render(){
   return (
    <View style={styles.mapLook}>
        <Svg viewBox="0 0 470 470">
            <Path fill="#ffeea3" d="M9.992 25.476L1.5 28.305 1.5 4.358 10.008 1.524 20.008 4.524 28.5 1.692 28.5 25.638 19.992 28.476z"></Path>
            <Path fill="#ba9b48" d="M10.016,2.049l9.697,2.909l0.303,0.091l0.3-0.1L28,2.386v22.892l-8.016,2.674l-9.697-2.909 l-0.303-0.091l-0.3,0.1L2,27.611V4.719L10.016,2.049 M29,0.998L20,4L10,1L1,3.998v25L10,26l10,3l9-3.002V0.998L29,0.998z"></Path>
            <Path fill="#fff" d="M20,28l-10-3V2l10,3V28z"></Path>
            <Path fill="#704e34" d="M25 16A1 1 0 1 0 25 18 1 1 0 1 0 25 16zM24 19A1 1 0 1 0 24 21 1 1 0 1 0 24 19zM13 9A1 1 0 1 0 13 11 1 1 0 1 0 13 9zM10 10A1 1 0 1 0 10 12 1 1 0 1 0 10 10zM15 7A1 1 0 1 0 15 9 1 1 0 1 0 15 7zM18 7A1 1 0 1 0 18 9 1 1 0 1 0 18 7zM21 8A1 1 0 1 0 21 10 1 1 0 1 0 21 8zM24 10A1 1 0 1 0 24 12 1 1 0 1 0 24 10zM25 13A1 1 0 1 0 25 15 1 1 0 1 0 25 13zM21 20A1 1 0 1 0 21 22 1 1 0 1 0 21 20zM18 19A1 1 0 1 0 18 21 1 1 0 1 0 18 19zM15 18A1 1 0 1 0 15 20 1 1 0 1 0 15 18zM12 18A1 1 0 1 0 12 20 1 1 0 1 0 12 18zM7 9A1 1 0 1 0 7 11 1 1 0 1 0 7 9z"></Path>
            <Path fill="#f78f8f" d="M3.904 19.02H9.135V20.02H3.904z" transform="rotate(134.999 6.52 19.52)"></Path>
            <Path fill="#c74343" d="M8.015 16.609L3.609 21.016 5.023 22.43 9.429 18.023 8.015 16.609z"></Path>
            <Path fill="#f78f8f" d="M6.016 16.856H7.016V22.176000000000002H6.016z" transform="rotate(134.999 6.516 19.516)"></Path>
            <Path fill="#c74343" d="M4.988 16.574L3.574 17.988 8.043 22.457 9.457 21.043 4.988 16.574z"></Path>
        </Svg>
     </View>
   );
  }
}

const styles = StyleSheet.create({
    mapLook: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100

    }

  });