import React from 'react'

const Languages = () => {

    const languages = [
        { language: 'English', level: 'Fluent' },
        { language: 'Spanish', level: 'Native' },
        { language: 'Italian', level: 'Fluent' },
      ];

      const languageNodes = languages.map(({ language, level }) => {
        return (
          <li style={{ padding: '0.5rem 0' }} key={language}>
            {language}
            <span className='dot'>{level}</span>
          </li>
        );
      });

    return (
        <div className='language-list pt-4'>
              <h5
                className='text-center text-md-start pb-3'
                style={{ fontWeight: '700' }}
              >
                Language Skills
              </h5>
              <ul className='text-center text-md-start'>{languageNodes}</ul>
            </div>
    )
}

export default Languages
