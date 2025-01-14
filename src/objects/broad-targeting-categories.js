/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * BroadTargetingCategories
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BroadTargetingCategories extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      category_description: 'category_description',
      id: 'id',
      name: 'name',
      parent_category: 'parent_category',
      path: 'path',
      size: 'size',
      size_lower_bound: 'size_lower_bound',
      size_upper_bound: 'size_upper_bound',
      source: 'source',
      type: 'type',
      type_name: 'type_name',
      untranslated_name: 'untranslated_name',
      untranslated_parent_name: 'untranslated_parent_name',
    });
  }

}
