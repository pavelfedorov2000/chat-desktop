'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const likesButtons = document.querySelectorAll('.like-btn');
    likesButtons.forEach(btn => {
        const likes = btn.nextElementSibling;
        console.log(likes);
        let counter = 0;
        btn.addEventListener('click', () => {
            counter++;
            if (counter % 2 !== 0) {
                likes.textContent = +likes.textContent + 1;
            } else {
                likes.textContent = +likes.textContent - 1;
            }
        });
    });

    const channels = document.querySelectorAll('.channels__button');
    const currentChannel = document.querySelector('.channels__button_active');
    const channelTitle = document.querySelector('.header__channel');
    channelTitle.textContent = `#${currentChannel.getAttribute('data-channel')}`;
    const messageField = document.querySelector('.message__textfield');
    messageField.placeholder = `Message in #${currentChannel.getAttribute('data-channel')}`;

    channels.forEach(channel => {
        channel.addEventListener('click', () => {
            document.querySelector('.channels__list').querySelector('.channels__button_active').classList.remove('channels__button_active');
            channel.classList.add('channels__button_active');
            let activeChannel = channel.getAttribute('data-channel');
            channelTitle.textContent = `#${activeChannel}`;
            messageField.placeholder = `Message in #${activeChannel}`;
        });
    });
});



