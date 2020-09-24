import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardTitle,
    List,
    Dot,
    RoleName,
    ActivityCount,
    ActivityCard,
    Activity,
    Expand,
    Tick,
    ActivityName
} from './RoleCard.styled';

const dots = (activity, total) => {
    const array = Array.from(Array(total).keys());
    return array.map((item, i) => <Dot key={`dot-${i}`} enabled={i < activity.length} />);
};

const getActive = (category) => category
    .reduce((acc, curr) => [...curr.activity, ...acc], [])
    .map(({ activityId }) => activityId);

const RoleRow = ({ categoryName, activity, totalActivityCount }) => (
    <li>
        <RoleName>{categoryName}</RoleName>
        <ActivityCount>{dots(activity, totalActivityCount)}</ActivityCount>
    </li>
);

RoleRow.propTypes = {
    activity: PropTypes.array,
    categoryName: PropTypes.string,
    totalActivityCount: PropTypes.number
};

const RoleCard = ({ role: { category, roleName }, content, activities }) => {
    const [expand, setExpand] = useState(false);
    const active = getActive(category);

    return (
        <div className="row mb-x2">
            <div className="col-xs-12 col-sm-10">
                <Card>
                    <CardTitle><strong>&lsquo;{roleName}&rsquo;</strong> {content}:</CardTitle>

                    {!expand && (
                        <List>
                            {category.map((cat, i) => (
                                <RoleRow key={`role-${i}`} {...cat} />
                            ))}
                        </List>
                    )}

                    {expand && activities.map(({ categoryName, activity }, i) => (
                        <ActivityCard key={`role-${i}`}>
                            <CardTitle>{categoryName}</CardTitle>

                            {activity.map(({ activityId, activityName }) => (
                                <Activity key={activityId}>
                                    <Tick ticked={active.includes(activityId)} />
                                    <ActivityName>{activityName}</ActivityName>
                                </Activity>
                            ))}
                        </ActivityCard>
                    ))}

                    <Expand onClick={() => setExpand(!expand)} isActive={expand}>
                        <div className="plus">
                            <div className="horizontal" />
                            <div className="vertical" />
                        </div>
                    </Expand>

                </Card>
            </div>
        </div >
    );
};

RoleCard.propTypes = {
    activities: PropTypes.array,
    content: PropTypes.string,
    role: PropTypes.shape({
        category: PropTypes.arrayOf(
            PropTypes.shape({
                categoryName: PropTypes.string,
                activity: PropTypes.array,
                totalActivityCount: PropTypes.number
            })
        ),
        roleName: PropTypes.string
    }),
};

export default RoleCard;
