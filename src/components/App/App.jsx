import { useState } from 'react';

import { Statistic } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { AppStyled } from './App.styled';

export function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countTotalFeedback = () => {
        const totalFeedback = good + neutral + bad;
        return totalFeedback;
    };

    const countPositiveFeedbackPercentage = () => {
        const totalFb = countTotalFeedback();
        return totalFb ? `${Math.floor((good / totalFb) * 100)}%` : '0%';
    };

    const leaveFeedback = (feedback) => {
        switch (feedback) {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;
            default:
                return;
        }
    };

    const options = ['good', 'neutral', 'bad'];
    return (
        <AppStyled>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={leaveFeedback}
                />
            </Section>
            <Section title="Statistics">
                {countTotalFeedback() ? (
                    <Statistic
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        </AppStyled>
    );
}
