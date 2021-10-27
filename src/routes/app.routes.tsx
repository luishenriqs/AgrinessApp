import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { List } from '../pages/List';
import { FindByName } from '../pages/FindByName';
import { FindByLocation } from '../pages/FindByLocation';


const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes () {
    const theme = useTheme();
    return (
        <Navigator
            screenOptions= {{
                headerShown: false,
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 50,
                },
                tabBarLabelPosition: 'below-icon',
                tabBarInactiveTintColor: theme.colors.main,
                tabBarInactiveBackgroundColor: theme.colors.shape,
                tabBarActiveTintColor: theme.colors.shape,
                tabBarActiveBackgroundColor: theme.colors.main,
            }}
        >
            <Screen 
                name='Listar' 
                component={List} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            name='list'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen 
                name='Busque por nome' 
                component={FindByName} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            name='search'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen 
                name='Busque por localização' 
                component={FindByLocation} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            name='search'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}