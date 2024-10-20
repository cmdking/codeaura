"use client"
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const t = useTranslations('contact');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setError(t('errorAllFieldsRequired'));
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError(t('errorInvalidEmail'));
      return;
    }

    setError('');

    // Send data to the server (via API endpoint)
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          toast.success(t('successMessage'), {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme:"colored",
            progress: undefined,
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          toast.error(t('errorFailedToSend'), {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        }
      })
      .catch(() => {
        toast.error(t('errorFailedToSend'), {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="card">
      <div className="content">
        <section id="contact">
          <h2>{t('getInTouch')}</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}

            <label htmlFor="name" style={{ display: 'none' }}>
              {t('namePlaceholder')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t('namePlaceholder')}
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              maxLength={20}
            />

            <label htmlFor="email" style={{ display: 'none' }}>
              {t('emailPlaceholder')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t('emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              maxLength={50}
            />

            <label htmlFor="message" style={{ display: 'none' }}>
              {t('messagePlaceholder')}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t('messagePlaceholder')}
              value={formData.message}
              onChange={handleChange}
              required
              autoComplete="off"
              maxLength={600}
            ></textarea>

            <button className="button" type="submit">
              {t('sendMessage')}
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
