import React from 'react'
import { Container } from './ButtonElements'

const Button = ({ title, type, disabled, onClick }) => {
    return (
        <Container
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {disabled ? 'Processing...' : title}
        </Container>
    )
}

export default Button