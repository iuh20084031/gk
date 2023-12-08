import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserByEmail } from '../utils/userUtils';
import { fetchUsers } from '../redux/slices/userSlice';

const ScreenLogin = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  const handleLogin = () => {
    const user = getUserByEmail(users, email);
    if (user) {
      navigation.navigate('home', {
        user: user,
      })
    } else {
      console.log("user not found")
      alert("khong tim thay user")
    } 
  }  
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <View>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder='Nhap email'
        />
        <Pressable onPress={handleLogin}>
          <Text>Xac nhan</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ScreenLogin

const styles = StyleSheet.create({})