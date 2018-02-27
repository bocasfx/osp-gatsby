import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>

    <img src="img/osp_logo.png" />
    <div>Online Documentation</div>

    <p>Version 7.0</p>

    <p>Publication date February 2017</p>

    <p>Copyright © 2017 Open Systems Pharmacology Suite Community</p>

    <p>License Owners of Open Systems Pharmacology Suite are allowed to print and use the PK-Sim® User Manual without fee, provided that the
    above copyright notice and this paragraph appear in all copies.
    The manual is provided “as is” without expressed or implied warranty. You may not modify it in any way.</p>

    <p>Trademark information: All trademarks within this manual belong to their legitimate owners.</p>
    
    <p>PK-Sim® and MoBi® use the CVODE solver: ©2002 The Regents of the University of California. Produced at the Lawrence Livermore National Laboratory (LLNL).</p>

    <p>Please, refer to the LLNL website for detailed information on licensing: <a href="http://www.llnl.gov/CASC/sundials/download/license.html">http://www.llnl.gov/CASC/sundials/download/license.html</a></p>

    <p>Internet:</p>

    <ul>
      <li>
        <a href="http://www.systems-biology.com">http://www.systems-biology.com</a>
      </li>
      <li>
        <a href="http://www.pk-sim.com">http://www.pk-sim.com</a>
      </li>
      <li>
        <a href="https://github.com/Open-Systems-Pharmacology">https://github.com/Open-Systems-Pharmacology</a>
      </li>
    </ul>

    <p>Email:</p>

    <ul>
      <li>
        <a href="mailto:support@systems-biology.com">support@systems-biology.com</a> (for technical support)
      </li>
      <li>
        <a href="mailto:info@systems-biology.com">info@systems-biology.com</a> (for general information)
      </li>
    </ul>
  </div>
);

export default IndexPage;
