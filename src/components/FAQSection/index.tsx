import { CardQuestion } from '../CardQuestion';

import linesImg from '../../assets/lines.svg';

import { questions } from '../../utils/questions';

import { FAQSectionContainer } from './styles';

export function FAQSection() {
  return (
    <FAQSectionContainer>
      <h3 className="small-heading">
        Frequemtly <span>asked question</span>
      </h3>

      <p className='c-para'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quasi, vero atque placeat nesciunt pariatur possimus unde ea sint totam nemo amet ex cupiditate?
      </p>

      <div className="lines">
        <img src={linesImg} alt="Linhas" />
      </div>

      <div className="questions-con">
        {questions.map((question, key) => (
          <CardQuestion 
            key={key}
            id={question.id}
            title={question.title}
            description={question.description}
          />
        ))}
      </div>
    </FAQSectionContainer>
  )
}