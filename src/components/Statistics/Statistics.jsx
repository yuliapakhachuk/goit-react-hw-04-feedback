// import {Component} from "react";
import PropTypes from "prop-types";
import {StatisticList, StatisticItem, StatValue} from "components/Statistics/Statistics.styled";

export function Statistic({good, neutral, bad, total, positivePercentage}) {
        return (
            <StatisticList>
                <StatisticItem>
                    Good: 
                    <StatValue>
                        {good}
                    </StatValue>
                </StatisticItem>
                <StatisticItem>
                    Neutral: 
                    <StatValue>
                        {neutral}
                    </StatValue>
                </StatisticItem>
                <StatisticItem>
                    Bad: 
                    <StatValue>
                        {bad}
                    </StatValue>
                </StatisticItem>
                <StatisticItem>
                    Total: 
                    <StatValue>
                        {total}
                    </StatValue>
                </StatisticItem>
                <StatisticItem>
                    Positive feedback: 
                    <StatValue>
                        {positivePercentage}
                    </StatValue>
                </StatisticItem>
            </StatisticList>
        )    
}

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired, 
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}