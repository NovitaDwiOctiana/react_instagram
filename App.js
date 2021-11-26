import React from "react";
import { View, Text, Image, Button,SafeAreaView, ScrollView } from "react-native";
import add from "./images/plus.png";
import menu from "./images/menu.jpeg";
import fotoprofile from "./images/profile.png";
import home from "./images/homee.jpeg";
import search from "./images/search.jpeg";
import reel from "./images/reel.png";
import shop from "./images/shop.jpg";
import feed from "./images/feed.png";
import tag from "./images/tag.png";
import gambar1 from "./images/im1.jpg";
import gambar2 from "./images/im2.jpg";
import gambar3 from "./images/im3.jpg";


const Angka = (props) => {
  return(
    <View style={{alignItems:"center"}}>
      <Text style={{fontSize:16,color: 'black',fontWeight: 'bold',marginTop:26}}>{props.jumlahAngka}</Text>
      <Text style={{fontSize:12,color: 'black',fontWeight: 'bold',marginTop:-22}}>{props.labelDetail}</Text>
    </View>
  );
}

const Textbio = (props) => {
  return(
      <View>
        <Text>{props.textBio}</Text>
      </View>
  );
}

const App = () => {
  return (
    <View style={{backgroundColor: 'white', flex:1}}>
      
      <View style={{  flex: 1,flexDirection: "row",}}>
        <Text style={{  color: 'black',padding:12 ,fontWeight: 'bold' ,fontSize: 22 ,flex: 4 }}>
          nvitaadd
        </Text>
        <View style={{  flex: 1 }}>
          <Image style={{ height:32, width: 32, marginLeft:12, marginTop:12}} source = {add}/>
        </View>
        <View style={{  flex: 1 }}>
          <Image style={{ height:22, width: 22, marginLeft:17, marginTop:17}} source = {menu}/>
        </View>
      </View >
      <View style={{flex: 2, flexDirection: "row" }}>
        <View style={{ flex: 2 }}>
          <Image style={{ height:90, width: 94, borderRadius:100,marginLeft:22, marginTop:8,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
        </View>
        <View style={{ flex: 1}}>
          <Angka jumlahAngka="1"/>
          <Angka labelDetail="Posts"/>
        </View> 
        <View style={{ flex: 1 }} >
          <Angka jumlahAngka="500"/>
          <Angka labelDetail="Followers"/>
        </View>
        <View style={{ flex: 1 }} >
          <Angka jumlahAngka="400"/>
          <Angka labelDetail="Following"/>
        </View>
      </View>
      <View style={{ backgroundColor: "white", flex: 2 }}>
        <Text style={{ color: 'black', marginLeft:20,marginTop:8 ,fontWeight: 'bold',fontSize: 16 , flex:1 }}>
            Novita Dwi
        </Text>
        <Text style={{marginLeft:20,color: 'black'}}>Mlg-Mks</Text>
        <Text style={{marginLeft:20,color: 'black'}}>⛅🌈✨</Text>
        <Text style={{marginLeft:20,color: 'black'}}>limited</Text>
        <Text style={{marginLeft:20,color: 'black'}}>07</Text>
      </View>
      <View style={{  backgroundColor: "white", flex: 1, flexDirection: "row" }}>
        <View style={{  flex: 4 }}>
          <View style = {{ marginTop:10, marginLeft:14,width:260}}>
            <Button title="Edit Profile" >
            </Button>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style = {{marginTop:10, marginLeft:14,width:40}}>
            <Button title="︿" >
            </Button>
          </View>
        </View>
      </View>
      <View style={{ flex: 2, flexDirection:"row" }}>
        <View style={{marginTop:11, marginLeft:16}}>
          <Image style={{ height:60, width: 60, borderRadius:100, marginTop:8,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
          <Text style={{textAlign:"center", fontSize: 12,color:"black"}}>🔎</Text>
        </View>
        <View style={{marginTop:11, marginLeft:16, }}>
          <Image style={{ marginLeft:10, height:60, width: 60, borderRadius:100, marginTop:8,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
          <Text style={{textAlign:"center", fontSize: 12,color:"black"}}>❤️</Text>
        </View>
        <View style={{marginTop:11, marginLeft:16}}>
          <Image style={{height:60, width: 60, borderRadius:100, marginTop:8,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
          <Text style={{textAlign:"center", fontSize: 12,color:"black"}}>🌱</Text>
        </View>
        <View style={{marginTop:11, marginLeft:16}}>
          <Image style={{ height:60, width: 60, borderRadius:100, marginTop:8,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
          <Text style={{textAlign:"center", fontSize: 12,color:"black"}}>✨</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", flex: 1, flexDirection: "row"}}> 
        <View style={{  alignItems:"center",flex: 1 }}>
          <Image style={{ height:50, width: 50, marginTop:4}} source = {feed}/>
        </View>
        <View style={{  alignItems:"center",flex: 1 }}>
          <Image style={{ height:34, width: 34, marginTop:11}} source = {reel}/>
        </View>
        <View style={{  alignItems:"center",flex: 1 }}>
          <Image style={{ height:38, width: 38, marginTop:8}} source = {tag}/>
        </View>
      </View>
      <View style={{ backgroundColor: "red", flex: 2,flexDirection: "row" }}>
        <View style={{ backgroundColor: "white", flex: 1 }}>
        <Image style={{ width: '100%',height: undefined,aspectRatio: 1,}} source = {gambar1}/>
        </View>
        <View style={{ backgroundColor: "white", flex: 1 }}>
        <Image style={{ width: '100%',height: undefined,aspectRatio: 1,}} source = {gambar2}/>
        </View>
        <View style={{ backgroundColor: "white", flex: 1 }}>
        <Image style={{ width: '100%',height: undefined,aspectRatio: 1,}} source = {gambar3}/>
        </View>
      </View>
      <View style={{ backgroundColor: "white", flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Image style={{ height:34, width: 34, marginLeft:18, marginTop:10}} source = {home}/>
        </View>
        <View style={{  flex: 1 }}>
          <Image style={{ height:30, width: 30, marginLeft:20, marginTop:13}} source = {search}/>
        </View>
        <View style={{  flex: 1 }}>
          <Image style={{ height:30, width: 30, marginLeft:20, marginTop:13}} source = {reel}/>
        </View>
        <View style={{ flex: 1 }}>
          <Image style={{ height:30, width: 30, marginLeft:20, marginTop:13}} source = {shop}/>
        </View>
        <View style={{ flex: 1 }}>
          <Image style={{ height:30, width: 30, marginLeft:20, marginTop:13, borderRadius:100, borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
        </View>
      </View>
    </View>
  );
};

export default App;