import React,  { Component,Fragment,PureComponent } from 'react';
import { View, Text,ScrollView,StyleSheet, RefreshControl,SafeAreaView,ListView ,
  Dimensions,Image,TouchableOpacity } from 'react-native';
import * as _ from "lodash";
import {strings} from '../../locales/i18n';
const rows = 3;
const cols = 3;
const marginHorizontal = 4;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));

export default class Scrolltest extends PureComponent  {
  scrollToEnd = () => this.carousel.scrollToEnd({ animated: false });
  constructor(props) {
    super(props);
    this.state = {
      mdata:this.props.mdata,
      rowss:false,
      rttl:this.props.rt

    };
  }

  grid(){
    return (
      <View style={styles.sectionContainer}>
      { this.state.mdata.sort((a, b) => a - b).reverse().map((item,key)=>( 
      <View key = { key } style={styles.boxContainer}><Text>{strings(item.name) }</Text>
      <Image style={{width:50,height:50}} source={item.pic}/>
      <TouchableOpacity
      style={{backgroundColor:'blue',width:50,height:45,borderRadius:60,justifyContent:'center',alignItems:'center'}}
      ><Text style={{color:'white'}}>{item.id}</Text></TouchableOpacity>
      </View>
      ))}
    </View>
    );
  }
  filteby(mm){
    _.filter( this.state.mdata, { name: mm })
  }
  roworcol(){
return (
  
//asec
    this.state.mdata.sort((a, b) => a - b).reverse().map((item,key)=>( 
      //desc
     // this.state.mdata.sort((a, b) => b - a).reverse().map((item,key)=>( 
        <View  key = { key }>
    <View style = { styles.colrow }>
    <Image style={{width:50,height:50}} source={item.pic}/>
    <Text style = { styles.text }>{ strings(item.name) }</Text>
    <TouchableOpacity
    style={{backgroundColor:'green',width:80,height:40,borderRadius:25,justifyContent:'center',alignItems:'center'}}
    ><Text style={{color:'white'}}>b{item.id}</Text></TouchableOpacity>
    </View>  
    <View style = { styles.separator }/>
</View>
    
    ))
)
  }

  scrolltype(){
if(this.props.stype==1){
  return   this.grid()
  
}else if(this.props.stype==2){
  return    this.roworcol()
  
  
}else if(this.props.stype==3){
  return   this.roworcol()   
}else{
  return    this.roworcol()   
}

  }

rtlltr(mm){
  if (mm==true){
    return  it => {this.carousel = it;}
     
   
  }else{
    return
  }
}
ssend(nn){
  if (nn==true){
return this.scrollToEnd
  }else{}
}
styss(jj){
  if (jj==true){
    return styles.contentContainerStyle
      }else{}
}
  render() {
    return (
      <View style={{flex:1}}>
       <ScrollView
      ref=   {this.rtlltr(this.state.rttl)} 
      onContentSizeChange={this.ssend(this.state.rttl)}
      contentContainerStyle={this.styss(this.state.rttl)}
            horizontal={this.props.hor}
       >
       { this.filteby(this.props.names)  }
       {this.scrolltype()}
      
     
       </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    contentContainerStyle:{
      flexDirection: 'row-reverse'
    },
    container:
    {
      flex: 1,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    colrow:{flexDirection:'row',
  alignItems:'center'
  },
    separator:
    {
      height: 2,
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100%'
    },
   
    text:
    {
      fontSize: 18,
      color: 'black',
      padding: 15,
      width:140
    },
    list: {
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  item: {
      backgroundColor: 'red',
      margin: 3,
      width: 100
  },
  scrollContainer: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    marginTop: marginVertical,
    marginBottom: marginVertical,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  });