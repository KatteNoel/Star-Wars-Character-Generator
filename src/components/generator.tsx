import React from 'react';

import { Button } from 'react-bootstrap';

import { useState } from 'react';
import { api } from '../rest/api';

export const Generator = () => {
    const [person, setPerson] = useState<any>(null);
    const [homeworld, setHomeworld] = useState<any>(null);

    function getRandomNumber(max: number) {
        return Math.floor(Math.random() * (max - 1) + 1);
    }

    async function getPersonAndHomeworld() {
        let id = getRandomNumber(82);
        let person = await api.get("people", id);
        let planetId = extractNumber(person.homeworld);
        if (planetId === undefined) return;
        let homeworld = await api.get("planets", parseInt(planetId))
        setPerson(person);
        setHomeworld(homeworld);
    }

    function extractNumber(string: string) {
        let matches = string.match(/(\d+)/);
        
        if (matches === null) return;
        return matches[0];
    }

    return (
        <>
        <h3 className="white centerText">{person?.name}</h3>
        {homeworld ? <p className="white centerText">Homeworld: {homeworld.name}</p> : null}
        <div className="center">
            <Button variant="warning" onClick={getPersonAndHomeworld}>Get Random Person</Button>
        </div>
        </>
    );
};
