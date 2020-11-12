/*
    This file is part of xdc3.

    xdc3 is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    xdc3 is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with xdc3.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file hex-to-string-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */

import BN = require('bn.js');
import {hexToString} from 'xdc3-utils';

// $ExpectType string
hexToString('0x49206861766520313030e282ac');
// $ExpectType string
hexToString(0x49206861766520313030e282ac);

// $ExpectError
hexToString(new BN(3));
// $ExpectError
hexToString(['string']);
// $ExpectError
hexToString([4]);
// $ExpectError
hexToString({});
// $ExpectError
hexToString(true);
// $ExpectError
hexToString(null);
// $ExpectError
hexToString(undefined);
