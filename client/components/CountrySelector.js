import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const CountrySelector = ({ toggleCountry, activeCountry, fetchQualData, fetchQuantData }) => {
  return (
    <div>
      <select className = "CountrySelector" onChange = { toggleCountry } value={ activeCountry }>
          <option value="us-usa">United States</option>
          <option value="af-afg">Afghanistan</option>
          <option value="al-alb">Albania</option>
          <option value="ag-dza">Algeria</option>
          <option value="an-and">Andorra</option>
          <option value="ao-ago">Angola</option>
          <option value="ac-atg">Antigua and Barbuda</option>
          <option value="ar-arg">Argentina</option>
          <option value="am-arm">Armenia</option>
          <option value="as-aus">Australia</option>
          <option value="au-aut">Austria</option>
          <option value="aj-aze">Azerbaijan</option>
          <option value="bf-bhs">The Bahamas</option>
          <option value="ba-bhr">Bahrain</option>
          <option value="bg-bgd">Bangladesh</option>
          <option value="bb-brb">Barbados</option>
          <option value="bo-blr">Belarus</option>
          <option value="be-bel">Belgium</option>
          <option value="bh-blz">Belize</option>
          <option value="bn-ben">Benin</option>
          <option value="bt-btn">Bhutan</option>
          <option value="bl-bol">Bolivia</option>
          <option value="bk-bih">Bosnia and Herzegovina</option>
          <option value="bc-bwa">Botswana</option>
          <option value="br-bra">Brazil</option>
          <option value="bx-brn">Brunei</option>
          <option value="bu-bgr">Bulgaria</option>
          <option value="uv-bfa">Burkina Faso</option>
          <option value="bm-mmr">Burma</option>
          <option value="by-bdi">Burundi</option>
          <option value="cb-khm">Cambodia</option>
          <option value="cm-cmr">Cameroon</option>
          <option value="ca-can">Canada</option>
          <option value="cv-cpv">Cape Verde</option>
          <option value="ct-caf">Central African Republic</option>
          <option value="cd-tcd">Chad</option>
          <option value="ci-chl">Chile</option>
          <option value="ch-chn">China</option>
          <option value="co-col">Colombia</option>
          <option value="cn-com">Comoros</option>
          <option value="cg-zar">Congo, D.R.</option>
          <option value="cf-cog">Congo</option>
          <option value="cs-cri">Costa Rica</option>
          <option value="iv-civ">Cote d'Ivoire</option>
          <option value="hr-hrv">Croatia</option>
          <option value="cu-cub">Cuba</option>
          <option value="cy-cyp">Cyprus</option>
          <option value="ez-cze">Czech Republic</option>
          <option value="da-dnk">Denmark</option>
          <option value="dj-dji">Djibouti</option>
          <option value="do-dma">Dominica</option>
          <option value="dr-dom">Dominican Republic</option>
          <option value="ec-ecu">Ecuador</option>
          <option value="eg-egy">Egypt</option>
          <option value="es-slv">El Salvador</option>
          <option value="ek-gnq">Equatorial Guinea</option>
          <option value="er-eri">Eritrea</option>          
          <option value="en-est">Estonia</option>
          <option value="et-eth">Ethiopia</option>
          <option value="fj-fji">Fiji</option>
          <option value="fi-fin">Finland</option>
          <option value="fr-fra">France</option>
          <option value="---pyf">French Polynesia</option>
          <option value="gb-gab">Gabon</option>
          <option value="ga-gmb">Gambia</option>
          <option value="gg-geo">Georgia</option>
          <option value="gm-deu">Germany</option>
          <option value="gh-gha">Ghana</option>
          <option value="---gib">Gibraltar</option>
          <option value="gr-grc">Greece</option>
          <option value="---grl">Greenland</option>
          <option value="gj-grd">Grenada</option>
          <option value="---glp">Guadeloupe</option>
          <option value="---gum">Guam</option>
          <option value="gt-gtm">Guatemala</option>
          <option value="gv-gin">Guinea</option>
          <option value="pu-gnb">Guinea-Bissau</option>
          <option value="gy-guy">Guyana</option>
          <option value="ha-hti">Haiti</option>
          <option value="ho-hnd">Honduras</option>
          <option value="---hkg">Hong Kong</option>
          <option value="hu-hun">Hungary</option>
          <option value="ic-isl">Iceland</option>
          <option value="in-ind">India</option>
          <option value="id-idn">Indonesia</option>
          <option value="ir-irn">Iran</option>
          <option value="iz-irq">Iraq</option>
          <option value="ei-irl">Ireland</option>
          <option value="is-isr">Israel</option>
          <option value="it-ita">Italy</option>
          <option value="jm-jam">Jamaica</option>
          <option value="ja-jpn">Japan</option>
          <option value="---jtn">Jhonston Island</option>
          <option value="jo-jor">Jordan</option>
          <option value="kz-kaz">Kazakhstan</option>
          <option value="ke-ken">Kenya</option>
          <option value="kr-kir">Kiribati</option>
          <option value="kn-prk">North Korea</option>
          <option value="ks-kor">South Korea</option>
          <option value="kv----">Kosovo</option>
          <option value="ku-kwt">Kuwait</option>
          <option value="kg-kgz">Kyrgyzstan</option>
          <option value="la-lao">Laos</option>
          <option value="lg-lva">Latvia</option>
          <option value="le-lbn">Lebanon</option>
          <option value="lt-lso">Lesotho</option>
          <option value="li-lbr">Liberia</option>
          <option value="ly-lby">Libya</option>
          <option value="ls-lie">Liechtenstein</option>
          <option value="lh-ltu">Lithuania</option>
          <option value="lu-lux">Luxembourg</option>
          <option value="---mac">Macao</option>
          <option value="mk-mkd">Macedonia</option>
          <option value="ma-mdg">Madagascar</option>
          <option value="mi-mwi">Malawi</option>
          <option value="my-mys">Malaysia</option>
          <option value="mv-mdv">Maldives</option>
          <option value="ml-mli">Mali</option>
          <option value="mt-mlt">Malta</option>
          <option value="rm-mhl">Marshall Islands</option>
          <option value="---mtq">Martinique</option>
          <option value="mr-mrt">Mauritania</option>
          <option value="mp-mus">Mauritius</option>
          <option value="mx-mex">Mexico</option>
          <option value="fm-fsm">Micronesia</option>
          <option value="---mid">Midway Islands</option>
          <option value="md-mda">Moldova</option>
          <option value="mn-mco">Monaco</option>
          <option value="mg-mng">Mongolia</option>
          <option value="---msr">Montserrat</option>
          <option value="mj----">Montenegro</option>
          <option value="mo-mar">Morocco</option>
          <option value="mz-moz">Mozambique</option>
          <option value="wa-nam">Namibia</option>
          <option value="nr-nru">Nauru</option>
          <option value="np-npl">Nepal</option>
          <option value="nl-nld">Netherlands</option>
          <option value="---ant">Netherlands Antilles</option>
          <option value="---ncl">New Caledonia</option>
          <option value="nz-nzl">New Zealand</option>
          <option value="nu-nic">Nicaragua</option>
          <option value="ng-ner">Niger</option>
          <option value="ni-nga">Nigeria</option>
          <option value="---nfk">Norfolk Island</option>
          <option value="---mnp">Northern Mariana Islands</option>
          <option value="no-nor">Norway</option>
          <option value="mu-omn">Oman</option>
          <option value="pk-pak">Pakistan</option>
          <option value="ps-plw">Palau</option>
          <option value="pm-pan">Panama</option>
          <option value="pp-png">Papua New Guinea</option>
          <option value="pa-pry">Paraguay</option>
          <option value="---pmy">Pen Malaysia</option>
          <option value="pe-per">Peru</option>
          <option value="rp-phl">Philippines</option>
          <option value="---pcn">Pitcairn</option>
          <option value="pl-pol">Poland</option>
          <option value="po-prt">Portugal</option>
          <option value="---pri">Puerto Rico</option>
          <option value="qa-qat">Qatar</option>
          <option value="---reu">Reunion</option>
          <option value="ro-rom">Romania</option>
          <option value="rs-rus">Russia</option>
          <option value="rw-rwa">Rwanda</option>
          <option value="sc-kn1">Saint Kitts and Nevis</option>
          <option value="st----">Saint Lucia</option>
          <option value="vc-vct">Saint Vincent and the Grenadines</option>
          <option value="ws-asm">Samoa</option>
          <option value="sm-smr">San Marino</option>
          <option value="tp-stp">Sao Tome and Principe</option>
          <option value="sa-sau">Saudi Arabia</option>
          <option value="sg-sen">Senegal</option>
          <option value="ri-ser">Serbia</option>
          <option value="se-syc">Seychelles</option>
          <option value="sl-sle">Sierra Leone</option>
          <option value="sn-sgp">Singapore</option>
          <option value="lo-svk">Slovakia</option>
          <option value="sl-svn">Slovenia</option>
          <option value="bp-slb">Solomon Islands</option>
          <option value="so-som">Somalia</option>
          <option value="sf-zaf">South Africa</option>
          <option value="od----">South Sudan</option>
          <option value="sp-esp">Spain</option>
          <option value="ce-lka">Sri Lanka</option>
          <option value="su-sdn">Sudan</option>
          <option value="ns-sur">Suriname</option>
          <option value="wz-swz">Swaziland</option>
          <option value="sw-swe">Sweden</option>
          <option value="sz-che">Switzerland</option>
          <option value="sy-syr">Syria</option>
          <option value="---twn">Taiwan</option>
          <option value="ti-tjk">Tajikistan</option>
          <option value="tz-tza">Tanzania</option>
          <option value="th-tha">Thailand</option>
          <option value="tt----">Timor-Leste to Togo</option>
          <option value="to-tgo">Togo</option>
          <option value="tn-ton">Tonga</option>
          <option value="td-tto">Trinidad and Tobago</option>
          <option value="ts-tun">Tunisia</option>
          <option value="tu-tur">Turkey</option>
          <option value="tx-tkm">Turkmenistan</option>
          <option value="tv-tuv">Tuvalu</option>
          <option value="ug-uga">Uganda</option>
          <option value="up-ukr">Ukraine</option>
          <option value="ae-are">United Arab Emirates</option>
          <option value="uk-gbr">United Kingdom</option>
          <option value="uy-ury">Uruguay</option>
          <option value="uz-uzb">Uzbekistan</option>
          <option value="nh-vut">Vanuatu</option>
          <option value="vt----">Vatican City</option>
          <option value="ve-ven">Venezuela</option>
          <option value="vm-vnm">Vietnam</option>
          <option value="ym-yem">Yemen</option>
          <option value="za-zmb">Zambia</option>
          <option value="zi-zwe">Zimbabwe</option>
        </select>
      <ul>
        <li>
          <RaisedButton 
          className = 'country-selector-btn' 
          backgroundColor = '#2196F3'
          onClick = { () => fetchQuantData(activeCountry.slice(-3)) } 
          label = 'View Quantitative Data'
          />
        </li>
        <li>
          <RaisedButton
          className = 'country-selector-btn' 
          backgroundColor = '#2196F3'
          onClick = { () => fetchQualData(activeCountry.slice(0, 2)) } 
          label = 'View Qualitative Data'
          />
        </li>
      </ul>
    </div>
  );
};

CountrySelector.propTypes = {
  toggleCountry: React.PropTypes.func.isRequired,
  activeCountry: React.PropTypes.string.isRequired,
  fetchQualData: React.PropTypes.func.isRequired,
  fetchQuantData: React.PropTypes.func.isRequired,
}

module.exports = CountrySelector;