import React, { useState } from 'react';
import List from './components/List';
import './styles/index.css';

export default function App() {
    const [list] = useState([
        {
            type: 'video',
            url: 'https://rutube.ru/play/embed/6b2b6a7fa3766a3adfec770d6e2a6b22',
            views: 50,
            title: 'Видео 1'
        },
        {
            type: 'video',
            url: 'https://rutube.ru/play/embed/27ce749037c55e40ad3982d62b5b8113/',
            views: 12,
            title: 'Видео 2'
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            url: 'https://habr.com/ru/news/906546/',
            views: 175
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            url: 'https://habr.com/ru/articles/905440/',
            views: 1532
        },
        {
            type: 'video',
            url: 'https://rutube.ru/play/embed/3441c96c04af04d2000ae9aaf685b633/',
            views: 4253,
            title: 'Видео 3'
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            url: 'https://habr.com/ru/articles/906472/',
            views: 12,
        },
    ]);

    return (
        <div className="root">
            <List list={list} />
        </div>
    );
}