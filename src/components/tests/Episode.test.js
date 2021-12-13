import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvnaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "specific summary statement",
    runtime: 1
}

const testEpisode2 = {
    id:1,
    name: "",
    image: null,
    season: 1,
    number: 1,
    summary: "specific summary statement",
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode={testEpisode}/>)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testEpisode}/>)
    const summary = screen.queryByText(/specific summary statement/i)
    expect(summary).toBeVisible()
    expect(summary).toBeInTheDocument()
    expect.stringContaining("specific summary statement")

});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={testEpisode2}/>)
    const image = screen.queryByAltText(/stranger_things.png/i)
    expect(image).toBeNull()
    expect(image).toBeInTheDocument()
});


// * [X] Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
// * [X] Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. **Use at least then 3 different types of expect statements to test the the existence of the summary value.**
// * [ ] The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to `null`. Test that the alt tag of the image displayed is set to './stranger_things.png'.