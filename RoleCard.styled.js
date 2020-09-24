import styled from 'styled-components';

export const Card = styled.div`
    background: ${(props) => props.theme.colors.white};
    border-radius: 0.5em;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    padding: 1.5em 2em;
    position: relative;
`;

export const CardTitle = styled.p`
    margin: 0.5em 0 1.5em 0;
    flex-basis: 100%;
    font-weight: 500;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        flex-basis: 50%;
        margin-bottom: 0.75em;
        font-size: ${(props) => props.theme.fonts.sizes.body14};
        font-weight: 500;
    }
`;

export const Dot = styled.span`
    background: ${({ theme, enabled }) => enabled ? theme.colors.primary : theme.colors.greyLight};
    display: inline-block;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    margin-right: 8px;
`;

export const RoleName = styled.span`
    display: inline-block;
    width: 65%;
`;

export const ActivityCount = styled.span`
    display: inline-block;
    width: 35%;
`;

export const ActivityCard = styled.div`
    background: ${(props) => props.theme.colors.greyLightest};
    font-size: ${(props) => props.theme.fonts.sizes.body14};
    padding: 1em 2em;
    margin-bottom: 1em;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

export const Activity = styled.div`
    flex-basis: 100%;
    margin-bottom: 0.5em;

    @media (${({ theme }) => theme.media.tablet}) {
        flex-basis: 50%;
    }
`;

export const Tick = styled.span`
    background: ${({ theme, ticked }) => ticked ? theme.colors.primary : theme.colors.greyMid};
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.65em;
    vertical-align: middle;
    overflow: hidden;
    position: relative;

    ${({ theme, ticked }) => ticked && `
        &:after {
            font-family: 'icomoon';
            content: '\\e979';
            color: ${theme.colors.white};
            font-size: ${theme.fonts.sizes.body12};
            position: absolute;
            top: 0.1em;
            left: 0.29em;
        }
    `}
`;

export const ActivityName = styled.span`
    vertical-align: middle;
`;

export const Expand = styled.button`
    top: 1.3em;
    right: 1.3em;
    border: none;
    background: none;
    width: 3em;
    position: absolute;
    cursor: pointer;

    .plus {
        position: relative;
        width: 2.55em;
        height: 2.5em;
        border-radius: 100%;

        .horizontal {
            position: absolute;
            background-color: ${(props) => props.theme.colors.primary};
            width: 1em;
            height: 0.125em;
            left: 50%;
            margin-left: -0.55em;
            top: 50%;
            margin-top: -0.063em;
        }

        .vertical {
            position: absolute;
            background-color: ${(props) => props.theme.colors.primary};
            width: 0.125em;
            height: 1em;
            left: 50%;
            margin-left: -0.125em;
            top: 50%;
            margin-top: -0.5em;
        }
    }

    ${(props) => props.isActive && `
        opacity: 1;
        .vertical {
            transition: all 0.3s ease-in-out;
            transform: rotate(90deg);
        }
        .horizontal {
            transition: all 0.3s ease-in-out;
            transform: rotate(90deg);
            opacity: 0;
        }
    `}

    ${(props) => !props.isActive && `
        .vertical {
            transition: all 0.3s ease-in-out;
            transform: rotate(-90deg);
        }
        .horizontal {
            transition: all 0.3s ease-in-out;
            transform: rotate(-90deg);
            opacity: 1;
        }
    `}
`;
