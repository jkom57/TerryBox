import React, {Component} from 'react';
import {Button, View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';

export default class About extends Component{ 
  render(){
    return(
      <WebView
        originWhitelist={['*']}
        source={
          { html:
            `<iframe src="https://asksensors.com/actuatorfs.html?s=4251&m=7676&uid=W0OashokGXvcq97CJrUgdFOvCBSQC0" width="950" height="500" type="text/html" ></iframe>
            <iframe src="https://asksensors.com/graphfs.html?s=4250&m=7674&uid=8POPafmnh9EECjGzDO8AEUEWGSIUt7" width="950" height="500" type="text/html" ></iframe>
            <iframe src="https://asksensors.com/graphfs.html?s=4250&m=7675&uid=DWvGeIAfKyJT33UIRUH3pmhiWz06y1" width="950" height="500" type="text/html" ></iframe>`
          }
        }
      />
    )
  }
}
