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
 * @file hex-to-number-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */

import BN = require('bn.js');
import {hexToNumber} from 'xdc3-utils';

// $ExpectType number
hexToNumber('232');
// $ExpectType number
hexToNumber(232);

// $ExpectError
hexToNumber(new BN(3));
// $ExpectError
hexToNumber(['string']);
// $ExpectError
hexToNumber([4]);
// $ExpectError
hexToNumber({});
// $ExpectError
hexToNumber(true);
// $ExpectError
hexToNumber(null);
// $ExpectError
hexToNumber(undefined);