import React from 'react';
import { Stack, Typography } from '@mui/material';

import { TitleSection } from '@components/common';

export const ProductDescription = () => {
  return (
    <Stack
      sx={{
        my: 10,
      }}
      alignItems="center"
    >
      <Stack direction="row" alignItems="flex-start" justifyContent="center" spacing={4}>
        <TitleSection title="Description" />
        <Typography variant="h5" color="secondary">
          ADDITIONAL INFORMATION
        </Typography>
        <Typography variant="h5" color="secondary">
          REVIEWS (1)
        </Typography>
      </Stack>
      <Typography variant="body1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare.
          Nulla aliquet enim tortor at auctor. Placerat duis ultricies lacus sed turpis
          tincidunt id aliquet risus. Ullamcorper a lacus vestibulum sed. Netus et
          malesuada fames ac turpis egestas integer eget. Nunc congue nisi vitae suscipit
          tellus. Ultricies integer quis auctor elit sed vulputate. Amet purus gravida
          quis blandit turpis. Massa tincidunt dui ut ornare lectus sit amet est placerat.
          Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.
          Nisl purus in mollis nunc sed id semper risus in. Ac ut consequat semper viverra
          nam libero justo laoreet sit.
        </p>
        <p>
          Enim facilisis gravida neque convallis. In ante metus dictum at tempor commodo
          ullamcorper. Risus commodo viverra maecenas accumsan lacus vel facilisis. Eget
          felis eget nunc lobortis mattis. Lorem mollis aliquam ut porttitor leo a diam.
          Leo duis ut diam quam nulla. Sed sed risus pretium quam vulputate. Aliquet
          porttitor lacus luctus accumsan tortor posuere ac ut. A arcu cursus vitae congue
          mauris rhoncus aenean vel elit. Augue interdum velit euismod in. Sit amet risus
          nullam eget. Eget felis eget nunc lobortis. Tempus iaculis urna id volutpat
          lacus. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam.
          Pellentesque id nibh tortor id aliquet lectus proin.
        </p>
      </Typography>
    </Stack>
  );
};
