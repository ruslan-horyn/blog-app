import React from 'react';
import Article from '../components/Article';

const articles = [
	{
		id: 1,
		title: 'Czym jest teoria strun?',
		autor: 'Jan Nowak',
		text:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo aliquid quidem quae explicabo, obcaecati quas optio maiores minima vitae architecto amet, quo possimus similique cupiditate voluptates libero facilis eveniet ea.',
	},
	{
		id: 2,
		title: 'Czym jest raradosk fermiego?',
		autor: 'Jan Kowalski',
		text:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo aliquid quidem quae explicabo, obcaecati quas optio maiores minima vitae architecto amet, quo possimus similique cupiditate voluptates libero facilis eveniet ea.',
	},
	{
		id: 3,
		title: 'Czym jest teoria strun',
		autor: 'Ania Kwiatkowska',
		text:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo aliquid quidem quae explicabo, obcaecati quas optio maiores minima vitae architecto amet, quo possimus similique cupiditate voluptates libero facilis eveniet ea.',
	},
];

const HomePage = props => {
	const atrList = articles.map(article => (
		<Article key={article.id} {...article} />
	));
	return <div className='home'>{atrList}</div>;
};

export default HomePage;
