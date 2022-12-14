const { getAllParfumes, createParfume } = require('../services/parfumeService');

const router = require('express').Router();

router.get('/get-all', async (req, res) => {
    try {
        const parfumes = await getAllParfumes();
        
        res.json(parfumes);
    } catch (error) {
        console.log(error);
    }
});

router.get('/create', async (req, res) => {
    const parfumeData = {
        title: 'Dior Sauvage',
        imageUrl: 'https://imgs.search.brave.com/9D575wQkskcghZ2PG51ps7fkpkf3H-pe8M-jB-Hmf_o/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/Tlh6blhFdHNWY3Y0/d2hPZ1hJNDNRSGFI/YSZwaWQ9QXBp',
        description: 'Discover the authentic and inspiring world of Sauvage, the Dior creation inspired by the great outdoors. Meet an icon of perfume.',
        price: '93'
    }
    try {
        const parfume = await createParfume(parfumeData);
        console.log(parfume);
        res.send(parfume);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;