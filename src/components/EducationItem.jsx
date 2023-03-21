import React from 'react';

function EducationItem({title}) {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-100 dark:border-stone-200">
            <li className="mb-4 ml-7">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-200" />
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    <h3 className="text-md font-medium text-stone-700 dark:text-stone-300">
                        {title}
                    </h3>
                </p>
            </li>
        </ol>
    )
}

export default EducationItem;