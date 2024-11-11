import { Text, SafeAreaView, StyleSheet, View, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';


const Stack = createStackNavigator();

function Landing({ navigation }) {


return (
<View style={styles.container}>
  <View >
    <Image source={require('./assets/fondo_landing.png')} style={styles.imgFon}/>
  </View>
  
  <View style={styles.cajaBotonLand}>
    <TouchableOpacity onPress={() => navigation.navigate("Login")} style= {styles.buttonInic}>
      <Text style= {styles.textInic}>
          Iniciar sesión
      </Text>
    </TouchableOpacity>
  </View>
  <View>
    <Text style= {styles.todavia}>¿Todavía no tienes cuenta</Text>
  </View>
    <View>
    <Text style= {styles.registro} onPress={() => navigation.navigate("Registro")}>Regístrate</Text>
  </View>
</View>
)
 }
 


function Login ({ navigation }) {


  return(
    <View style={styles.container}>
      <View style={styles.cajaTituLog}>
        <Text style={styles.tituloLog}>Todos tus títulos siempre a mano</Text>
      </View>
      <View>
        <TextInput style={styles.inputLog}
        placeholder="Usuario"
        placeholderTextColor="#grey">
        </TextInput>
        <TextInput style={styles.inputLog}
        placeholder="Contraseña"
        placeholderTextColor="#grey">
        </TextInput>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style= {styles.buttonIntro}>
          <Text style= {styles.textInic}>
          Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
 
 
function Home({ navigation }) {


return (
  <View style= {styles.container}>

  <View>
    <Text style={styles.nombreUser}>Nombre del Usuario
    </Text>

    <View style={styles.contenedorBotonHome}>
      <TouchableOpacity onPress={() => navigation.navigate("Libros")} style={styles.botonHome}>
        <Text style={styles.textoBotonHome}>Libros</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Peliculas")} style={styles.botonHome}>
        <Text style={styles.textoBotonHome}>Películas</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Sugerencia")} style={styles.botonHome}>
        <Text style={styles.textoBotonHome}>SugerencIA</Text>
      </TouchableOpacity>

    </View>
  </View>

  </View>
  );
 }




function Registro ({ navigation }) {

  return (
    <View style={styles.container}>
      
      <Text style={styles.tituloReg}>¡Hola! Bienvenido a Pikudo</Text>

      <TextInput
        style={styles.inputLog}
        placeholder="Nombre"
        placeholderTextColor="#grey"
      />
      <TextInput
        style={styles.inputLog}
        placeholder="Correo"
        placeholderTextColor="#grey"
      />
      <TextInput
        style={styles.inputLog}
        placeholder="Contraseña"
        placeholderTextColor="#grey"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.buttonIntro}>
        <Text style= {styles.textInic}>Crear cuenta</Text>
      </TouchableOpacity>
    
    </View>
  )
}


function Libros ({ navigation }) {

  return (
    <View style={styles.container}>
      <View>
        <FlatList

        />
      </View>
    </View>
  )
}

function Peliculas ({ navgation }) {

  return (
    <View style={styles.container}>
      <View>

      </View>
    </View>
  )
}


function Sugerencia ({ navgation }) {

  return (
    <View>

    </View>
  )
}




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registro" component={Registro}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Libros" component={Libros}/>
          <Stack.Screen name="Peliculas" component={Peliculas}/>
          <Stack.Screen name="Sugerencia" component={Sugerencia}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2C3E50',
    padding: 0,
  },
  imgFon:{
    height: "98%",
    index: "-2",
  },
  cajaBotonLand:{
    flex: 0.2,
    paddingTop: "8rem",
  },
  buttonInic: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#3498DB',
    borderRadius: '25px',
    height: '3rem',
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '6.5rem',
  },
  textInic: {
  color: '#ECF0F1',
  },
  todavia:{
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5rem",
    paddingTop: "1rem",
    color: "#ECF0F1",
  },
  registro:{
    color: "#E67E22",
    textDecorationLine: 'underline',
    marginLeft: "5rem",
  },
  inputLog:{
    backgroundColor: "#ECF0F1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
    marginLeft: "5rem",
    width:"55%",
    height: "2rem",
    borderRadius: "25px",
    paddingLeft: "1rem",
      },
  buttonIntro:{
    backgroundColor: '#3498DB',
    borderRadius: '25px',
    width: "30%",
    height: "2rem",
    marginTop: "1.5rem",
    justifyContent: 'center',
    alignItems: "center",
    marginLeft: "7.5rem",
  },
  cajaTituLog:{
    flex: 0.3,
    width: "60%",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: "5rem",
    marginBottom: "",
  },
  tituloLog:{
    color: "#ECF0F1",
    fontSize: "x-large",
  },
  tituloReg:{
    color: "#ECF0F1",
    fontSize: "x-large",
    justifyContent: "center",
    alignContent: "center",
    marginLeft: "1.5rem",
  },
  nombreUser: {
    color: "#ECF0F1",
    position: "absolute",
    top: "-4rem",
    right: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  botonHome:{
    borderRadius: '15px',
    backgroundColor: "#ECF0F1",
    width: "8rem",
    height: "4rem",
    justifyContent: "center",
    alignItems: "center",
  },
  contenedorBotonHome: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: 16,
},
  textoBotonHome:{
    fontWeight: "bold",
},


});
