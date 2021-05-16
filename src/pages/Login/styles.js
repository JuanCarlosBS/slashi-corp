import React from 'react';
import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Header = styled.View`
    margin-top: 30%;
    width: 100%;
    height: 90px;
    background-color: #ffffff; 
    padding-left: 8%;
    padding-bottom: 10%;
`

export const Title = styled.Text`
    flex: 1;
    font-size: 60px;
`
export const Form = styled.View`
    width: 100%;
    height: 55%;
    background-color: #ffffff; 
    padding-left: 8%;
    padding-bottom: 5%;
    padding-right: 8%;
`

export const SubTitle = styled.Text`
    color: #808080;
`

export const Divider = styled.View`
    height: 1px;
    width:100%;
    background-color: #cecece;
`

export const Footer = styled.View`
    flex:1 
    align-items: center;
    margin-top: 10%
    width: 100%;
    height: 5%;
    background-color: #ffffff; 
    padding-left: 8%;
    padding-bottom: 5%;
    padding-right: 8%;
`

export const ButtonSubmit = styled(RectButton)`
    align-items: center;
    width : 100%;
    padding : 17px;
    background-color: #92ffa2
    margin-bottom: 18px;    
    ${props => props.facebookButton && css`
        margin-top: 18px;
        background-color: #3b5998;
    `}
    ${props => props.googleButton && css`
        background-color: #db4a39;
    `}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       5%;
`

export const ButtonText = styled.Text`
    font-size: 20px;
    ${props => props.whiteText && css`
        color: #ffffff;
    `}
`

export const Input = styled.TextInput`
    margin-top: 10px;
    padding: 10px
    border-bottom-width: 1px ;
    border-bottom-color: #cecece;
    margin-bottom: 40px;
    ${props => props.onFocus && css`
        border-bottom-color: red;
    `}
`