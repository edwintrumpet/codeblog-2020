/* eslint-disable import/prefer-default-export */
import React from 'react';
import { element as _element } from 'prop-types';
import TopLayout from './src/components/TopLayout';

export const wrapRootElement = ({ element }) => <TopLayout>{element}</TopLayout>;

wrapRootElement.propTypes = {
  element: _element,
};

wrapRootElement.defaultProps = {
  element: null,
};
