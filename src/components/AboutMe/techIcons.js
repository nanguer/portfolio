import React from 'react'
import ReduxIcon from './ReduxIcon';
import { DiMongodb } from 'react-icons/di';
import { FaReact,
    FaNodeJs,
    FaHtml5,
    FaSass,
    FaCss3} from 'react-icons/fa'

const TechIcons = ({isDesktop}) => {

    const techIcons = [
        { IconComponent: FaReact, name: 'React' },
        { IconComponent: ReduxIcon, name: 'Redux' },
        { IconComponent: FaHtml5, name: 'Html5' },
        { IconComponent: FaCss3, name: 'Css3' },
        { IconComponent: FaSass, name: 'Sass' },
        { IconComponent: FaNodeJs, name: 'NodeJS' },
        { IconComponent: DiMongodb, name: 'MongoDB' },
      ];

    const iconStyle = {
        margin: '0px 7px',
        minWidth: '3em',
      };
      const iconStyleReact = {
        margin: '0px 7px 0px 0px',
        minWidth: '3em',
      };
    return (
        <div className='tech-icons d-flex flex-row flex-sm-nowrap flex-wrap justify-content-start'>
        {techIcons.map(({ IconComponent, name }) => {
          const style = name === 'React' ? iconStyleReact : iconStyle;
          return (
            <div className={`icon-container icon-${name}`} key={name}>
              <IconComponent
                size={isDesktop ? '3em' : '2em'}
                style={style}
              />
              <div className='text-center' style={style}>
                {name}
              </div>
            </div>
          );
        })}
      </div>
    )
}

export default TechIcons
