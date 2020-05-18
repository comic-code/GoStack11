import React, { useEffect, useState }from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(res => {
            console.log(res.data);
            setProjects(res.data);
        });
    }, []);

    async function handdleAddProject() {
        const res = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Fábio José' 
        });

        setProjects([...projects, res.data]);
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#9159C1"/>
            
            <SafeAreaView style={styles.container}>
                {/*Perfoma bem melhor*/ }
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem = {({ item: project }) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />

                <TouchableOpacity
                    activeOpacity={0,6}
                    style={styles.button} 
                    onPress={handdleAddProject}
                >
                    <Text style={styles.buttonText}>Adicionar projeto</Text>
                </TouchableOpacity>

            </SafeAreaView>

            {/**
            <View style={styles.container}> 
            
                {projects.map(project => (
               
                    <Text style={styles.project} key={project.id}>{project.title}</Text>
                    ))}

            </View>
            */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9159C1',
    },

    project: {
        color: '#fff',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 20,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontWeight: "bold",
        fontSize: 16
    }
});