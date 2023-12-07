import './App.css';
import { useState } from 'react';
//import { NavBarHeaderProps } from './ui-components/NavBarHeader';
import {
  PetProfileCollection 
 } from './ui-components';
 import {
  NavBarMain 
 } from './ui-components';
 import {
  FooterMain 
 } from './ui-components';
 
 import {
  AddPet 
 } from './ui-components';
 import {
  PetInfo 
 } from './ui-components';
 import{
  withAuthenticator 
 } from '@aws-amplify/ui-react';

 import { Storage } from 'aws-amplify/storage';




function App({user,signOut}) {

  async function saveFile(){
    await Storage.put("test.txt","Hello");
  }
  const [showForm,setShowForm] = useState(false);
  const [showDetails,setShowDetails] = useState(false);
  const [pet,setPet] =useState()
  const [updatePet,setUpdatePet] = useState();

  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [breed,setBreed] = useState("");
  const [about,setAbout] = useState("");
  const [color,setColor] = useState("");
  const [image,setImage] = useState("");



  const formOverride = {

    TextField29766922: {
      placeholder:name
    },
    TextField29766923: {
      placeholder:breed
    },
    TextField29766924: {
      placeholder:about
    },
    TextField3873479: {
      placeholder:age
    },
    TextField3873486: {
      placeholder:color
    },
    TextField3873515: {
      placeholder:image
    },
    image: {
      scr: updatePet == null ? "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0cyUyMHN0b3JlfGVufDB8fDB8fHww" 
      : updatePet.image,

    },

    Button3864418:{
      isDisabled: updatePet ? true:false
    },

    Button29766907:{
      isDisabled: !updatePet ? true:false
    },


    "MyIcon": {
      style:{
        cursor:"pointer",
      },
      onClick: () => {
        setShowForm(! showForm);
      },
    },
  };

  const detailsOverride = {
    "MyIcon": {
      style:{
        cursor:"pointer",
      },
      onClick: () => {
        setShowDetails(!showDetails);
      },
    },
  };

  const navbarOverrides = {

    Button:{
      onClick: signOut,
    },
    image: {
      //src: user?.attributes?.profile,
      src:"https:img.icons8.com/color/50/000000/cat",
    },
    "placeholder":
    {
      src: user?.attributes?.name,
    },
  "Add Pet":{
    style:{
      cursor:"pointer",
    },
    onClick:() =>{
      saveFile();
      setShowForm(!showForm)
    },
  },
};
  return (
    <div className="App">
       <NavBarMain  width={"100%"} overrides={navbarOverrides} />
      <header className="App-header">
        {
          showDetails && (
            <PetInfo
            overrides={
              detailsOverride
            }
            pet={pet} 
            style={{
              textAlign:"left",
              margin:"1rem",
            }}/>
          )
        }
        {
          showForm && (
            <AddPet 
            pet = {updatePet}
            overrides={
              formOverride
            }
            style={{
              textAlign:"left",
              margin:"1rem",
            }}/>
          )
        }
        <PetProfileCollection 
        overrideItems = {({item,index})=> ({
          overrides: {
            Breed: {color: "blue"},

          
            Button29766907:{
              onClick: () => {
                setShowDetails(!showDetails);
                setPet(item);
              }
            },

            Button3864418:{
              onClick: () => {
                if(!showForm) setShowForm(true)
                setUpdatePet(item)
                setName(item.name)
                setAbout(item.about)
                setImage(item.image)
                setAge(item.age)
                setBreed(item.breed)
                setColor(item.color)
              }
            }
          },
        })}/>
       </header>
       <FooterMain  width={"100%"} />
    </div>
  );
}

export default withAuthenticator(App);
