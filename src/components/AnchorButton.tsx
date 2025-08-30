import { Fragment } from 'react/jsx-runtime';
import type { AnchorButtonProps } from './components';

export default function AnchorButton(props: AnchorButtonProps) {
    if (props.target !== undefined) {
        return (
            <Fragment>
                <a href={props.url} className={`btn ${props.type}`} target={props.target}>{props.text}</a>
                &nbsp;
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <a href={props.url} className={`btn ${props.type}`}>{props.text}</a>
                &nbsp;
            </Fragment>            
        );
    }    
}