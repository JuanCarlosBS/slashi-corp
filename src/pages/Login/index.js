import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Container , Header, Title, Form, Footer, Divider, SubTitle, ButtonSubmit, ButtonText, Input } from './styles'

export default function Login() {
    return (
        <Container >
            <Header>
                <Title>Entrar</Title>
            </Header>
            <Form>
                <SubTitle>Username ou Email</SubTitle>
                <Input />
                <SubTitle >Senha</SubTitle>
                <Input />
                <ButtonSubmit><ButtonText>Entrar</ButtonText></ButtonSubmit>
                <ButtonSubmit facebookButton><ButtonText whiteText>Entrar com Facebook</ButtonText></ButtonSubmit>
                <ButtonSubmit googleButton><ButtonText whiteText>Entrar com Google</ButtonText></ButtonSubmit>
            </Form>
            <Divider></Divider>
            <Footer>
                <Text>Ainda não tem conta? Inscreva-se</Text>
                <Text>Esqueceu sua senha?</Text>
            </Footer>
        </Container>
    )
}