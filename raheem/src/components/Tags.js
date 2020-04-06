import React, { useState } from 'react';

/* styles */
import { Label } from '../styles/global';
import { TagContainer, Tag } from '../styles/tags';

export default function Tags() {

    /* state for an array of the user's selected / toggled tags */
    const [toggledTags, setToggledTags] = useState([]);

    /* function to find the index of a selected tag so that we
        can easily remove it if the user deselects it */
    const findIndexOfTag = (tag) => {
        const index = toggledTags.indexOf(tag);
        return index;
    }

    /* function to actually toggle / select a specific tag */
    const toggleTag = (e) => {
        e.preventDefault(); // prevent default refresh from button clicks
        e.target.classList.toggle('toggled'); // toggle the 'toggled' class for styling when clicked

        /* if our toggled tags array does NOT include the selected tag,
            then we should add it to our toggled tags array */
        if (!toggledTags.includes(e.target.value)) {
            setToggledTags([
                ...toggledTags,
                e.target.value
            ]);
        }
        else {
            /* otherwise we should find the index of the already toggled
                tag, filter it out, and update our toggled tags state 
                with the remaining toggled tags */
            const filter = toggledTags.filter(tag => tag !== e.target.value);
            setToggledTags(filter);
        }
    }

    return (
        <div>
            <Label>I was <span className="light">(click as many as apply)</span></Label>
            <TagContainer>
                <Tag onClick={toggleTag} value="helped">helped</Tag>
                <Tag onClick={toggleTag} value="protected">protected</Tag>
                <Tag onClick={toggleTag} value="profiled">profiled</Tag>
                <Tag onClick={toggleTag} value="neglected">neglected</Tag>
                <Tag onClick={toggleTag} value="harassed">harassed</Tag>
                <Tag onClick={toggleTag} value="wrongly accused">wrongly accused</Tag>
                <Tag onClick={toggleTag} value="disrespected">disrespected</Tag>
                <Tag onClick={toggleTag} value="physically attacked">physically attacked</Tag>
            </TagContainer>

            {/* ensuring our toggled tags array is working correctly */}
            {console.log(toggledTags)}
        </div>
    )
}
