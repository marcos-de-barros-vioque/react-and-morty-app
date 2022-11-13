
import React from 'react';
import Card from '../components/Card';

export default function Home({ apiCharacters }) {
    return <Card key={apiCharacters.id} apiCharacters={apiCharacters} />
}
