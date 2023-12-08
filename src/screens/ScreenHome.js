import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoForUser, deleteUser, fetchUsers } from '../redux/slices/userSlice';
import { getUserByEmail } from '../utils/userUtils';

const ScreenHome = ({ route, navigation }) => {
    const [userParams, setUserParams] = useState({});
    const dispatch = useDispatch()
    const userId = '1'; 
    useEffect(() => {
        try {
            const { user } = route.params;
            setUserParams(user);
        } catch (error) {
            console.log("err user : ", error);
        }

        navigation.setOptions({
            title: 'Home',
            headerRight: () => (
                <View style={{ marginRight: 10 }}>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Image
                            source={require('../../assets/favicon.png')}
                            style={{
                                width: 50,
                                height: 50,
                                resizeMode: 'contain',
                                marginLeft: 80
                            }}
                        />
                    </View>
                </View>
            ),
            headerStyle: {
                backgroundColor: '#3385ff',
                borderRadius: 5,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 5,
            }
        });
    }, [navigation])
    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodoForUser({ userId, todoId }));
    };
    return (
        <View style={{
            flex: 1,
            alignItems: 'center'
        }}>
            <Text>user  : {userParams.name}</Text>
            <Text>Danh sách việc làm</Text>
            <FlatList
                data={userParams.todos}
                keyExtractor={(item) => item.id}
                renderItem={(item) => (
                    <View>
                        <Text>{item.item.content}</Text>
                        <Pressable onPress={() => handleDeleteTodo(item.item.id)}><Text>Xoa</Text></Pressable>
                        <Pressable><Text>Sua</Text></Pressable>
                    </View>
                )}
            />
        </View>
    )
}

export default ScreenHome

const styles = StyleSheet.create({})