import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import StarWarsCharacters from './StarWarsCharacters'
import {getData as mockGetData} from '../api'

jest.mock('../api')

//https://swapi.co/api/people/1

test('renders the form', async () => {

    mockGetData.mockResolvedValueOnce({results:[{name: 'Luke Skywalker'}]})

    
    const {getByText} = render(<StarWarsCharacters />)

    const nextTest = getByText(/next/i)
    const prevTest = getByText(/previous/i)
    fireEvent.click(nextTest)
    fireEvent.click(prevTest)
    expect(mockGetData).toHaveBeenCalledTimes(1)

    wait (() => expect(getByText(/luke skywalker/i)))
})