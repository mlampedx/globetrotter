const React = require('react');

const CountrySelector = ({ toggleCountry, activeCountry, fetchQualData, fetchQuantData }) => {
  return (
    <div>
      <select className = "CountrySelector" onChange = { toggleCountry } value={ activeCountry }>
          <option value="us-usa">United States</option>
          <option value="af">Afghanistan</option>
          <option value="al">Albania</option>
          <option value="ag">Algeria</option>
          <option value="an">Andorra</option>
          <option value="ao">Angola</option>
          <option value="ac">Antigua and Barbuda</option>
          <option value="ar">Argentina</option>
          <option value="am">Armenia</option>
          <option value="as">Australia</option>
          <option value="au">Austria</option>
          <option value="aj">Azerbaijan</option>
          <option value="bf">The Bahamas</option>
          <option value="ba">Bahrain</option>
          <option value="bg">Bangladesh</option>
          <option value="bb">Barbados</option>
          <option value="bo">Belarus</option>
          <option value="be">Belgium</option>
          <option value="bh">Belize</option>
          <option value="bn">Benin</option>
          <option value="bt">Bhutan</option>
          <option value="bl">Bolivia</option>
          <option value="bk">Bosnia and Herzegovina</option>
          <option value="bc">Botswana</option>
          <option value="br">Brazil</option>
          <option value="bx">Brunei</option>
          <option value="bu">Bulgaria</option>
          <option value="uv">Burkina Faso</option>
          <option value="bm">Burma</option>
          <option value="by">Burundi</option>
          <option value="cb">Cambodia</option>
          <option value="cm">Cameroon</option>
          <option value="ca">Canada</option>
          <option value="cv">Cape Verde</option>
          <option value="ct">Central African Republic</option>
          <option value="cd">Chad</option>
          <option value="ci">Chile</option>
          <option value="ch">China</option>
          <option value="co">Colombia</option>
          <option value="cn">Comoros</option>
          <option value="cg">Congo, D.R.</option>
          <option value="cf">Congo</option>
          <option value="cs">Costa Rica</option>
          <option value="iv">Cote d'Ivoire</option>
          <option value="hr">Croatia</option>
          <option value="cu">Cuba</option>
          <option value="cy">Cyprus</option>
          <option value="ez">Czech Republic</option>
          <option value="da">Denmark</option>
          <option value="dj">Djibouti</option>
          <option value="do">Dominica</option>
          <option value="dr">Dominican Republic</option>
          <option value="ec">Ecuador</option>
          <option value="eg">Egypt</option>
          <option value="es">El Salvador</option>
          <option value="ek">Equatorial Guinea</option>
          <option value="er">Eritrea</option>          
          <option value="en">Estonia</option>
          <option value="et">Ethiopia</option>
          <option value="fj">Fiji</option>
          <option value="fi">Finland</option>
          <option value="fr">France</option>
          <option value="gb">Gabon</option>
          <option value="ga">Gambia</option>
          <option value="gg">Georgia</option>
          <option value="gm">Germany</option>
          <option value="gh">Ghana</option>
          <option value="gr">Greece</option>
          <option value="gj">Grenada</option>
          <option value="gt">Guatemala</option>
          <option value="gv">Guinea</option>
          <option value="pu">Guinea-Bissau</option>
          <option value="gy">Guyana</option>
          <option value="ha">Haiti</option>
          <option value="ho">Honduras</option>
          <option value="hu">Hungary</option>
          <option value="ic">Iceland</option>
          <option value="in">India</option>
          <option value="id">Indonesia</option>
          <option value="ir">Iran</option>
          <option value="iz">Iraq</option>
          <option value="ei">Ireland</option>
          <option value="is">Israel</option>
          <option value="it">Italy</option>
          <option value="jm">Jamaica</option>
          <option value="ja">Japan</option>
          <option value="jo">Jordan</option>
          <option value="kz">Kazakhstan</option>
          <option value="ke">Kenya</option>
          <option value="kr">Kiribati</option>
          <option value="kn">North Korea</option>
          <option value="ks">South Korea</option>
          <option value="kv">Kosovo</option>
          <option value="ku">Kuwait</option>
          <option value="kg">Kyrgyzstan</option>
          <option value="la">Laos</option>
          <option value="lg">Latvia</option>
          <option value="le">Lebanon</option>
          <option value="lt">Lesotho</option>
          <option value="li">Liberia</option>
          <option value="ly">Libya</option>
          <option value="ls">Liechtenstein</option>
          <option value="lh">Lithuania</option>
          <option value="lu">Luxembourg</option>
          <option value="mk">Macedonia</option>
          <option value="ma">Madagascar</option>
          <option value="mi">Malawi</option>
          <option value="my">Malaysia</option>
          <option value="mv">Maldives</option>
          <option value="ml">Mali</option>
          <option value="mt">Malta</option>
          <option value="rm">Marshall Islands</option>
          <option value="mr">Mauritania</option>
          <option value="mp">Mauritius</option>
          <option value="mx">Mexico</option>
          <option value="fm">Micronesia</option>
          <option value="md">Moldova</option>
          <option value="mn">Monaco</option>
          <option value="mg">Mongolia</option>
          <option value="mj">Montenegro</option>
          <option value="mo">Morocco</option>
          <option value="mz">Mozambique</option>
          <option value="wa">Namibia</option>
          <option value="nr">Nauru</option>
          <option value="np">Nepal</option>
          <option value="nl">Netherlands</option>
          <option value="nz">New Zealand</option>
          <option value="nu">Nicaragua</option>
          <option value="ng">Niger</option>
          <option value="ni">Nigeria</option>
          <option value="no">Norway</option>
          <option value="mu">Oman</option>
          <option value="pk">Pakistan</option>
          <option value="ps">Palau</option>
          <option value="pm">Panama</option>
          <option value="pp">Papua New Guinea</option>
          <option value="pa">Paraguay</option>
          <option value="pe">Peru</option>
          <option value="rp">Philippines</option>
          <option value="pl">Poland</option>
          <option value="po">Portugal</option>
          <option value="qa">Qatar</option>
          <option value="ro">Romania</option>
          <option value="rs">Russia</option>
          <option value="rw">Rwanda</option>
          <option value="sc">Saint Kitts and Nevis</option>
          <option value="st">Saint Lucia</option>
          <option value="vc">Saint Vincent and the Grenadines</option>
          <option value="ws">Samoa</option>
          <option value="sm">San Marino</option>
          <option value="tp">Sao Tome and Principe</option>
          <option value="sa">Saudi Arabia</option>
          <option value="sg">Senegal</option>
          <option value="ri">Serbia</option>
          <option value="se">Seychelles</option>
          <option value="sl">Sierra Leone</option>
          <option value="sn">Singapore</option>
          <option value="lo">Slovakia</option>
          <option value="sl">Slovenia</option>
          <option value="bp">Solomon Islands</option>
          <option value="so">Somalia</option>
          <option value="sf">South Africa</option>
          <option value="od">South Sudan</option>
          <option value="sp">Spain</option>
          <option value="ce">Sri Lanka</option>
          <option value="su">Sudan</option>
          <option value="ns">Suriname</option>
          <option value="wz">Swaziland</option>
          <option value="sw">Sweden</option>
          <option value="sz">Switzerland</option>
          <option value="sy">Syria</option>
          <option value="ti">Tajikistan</option>
          <option value="tz">Tanzania</option>
          <option value="th">Thailand</option>
          <option value="tt">Timor-Leste to Togo</option>
          <option value="to">Togo</option>
          <option value="tn">Tonga</option>
          <option value="td">Trinidad and Tobago</option>
          <option value="ts">Tunisia</option>
          <option value="tu">Turkey</option>
          <option value="tx">Turkmenistan</option>
          <option value="tv">Tuvalu</option>
          <option value="ug">Uganda</option>
          <option value="up">Ukraine</option>
          <option value="ae">United Arab Emirates</option>
          <option value="uk">United Kingdom</option>
          <option value="uy">Uruguay</option>
          <option value="uz">Uzbekistan</option>
          <option value="nh">Vanuatu</option>
          <option value="vt">Vatican City</option>
          <option value="ve">Venezuela</option>
          <option value="vm">Vietnam</option>
          <option value="ym">Yemen</option>
          <option value="za">Zambia</option>
          <option value="zi">Zimbabwe</option>
        </select>
      <button 
        className = 'btn-primary' 
        onClick = { () => fetchQuantData(activeCountry.slice(-3)) } >
        View quantitative data
        </button>
        <button 
        className = 'btn-primary' 
        onClick = { () => fetchQualData(activeCountry.slice(0, 2)) } >
        View qualitative data
        </button>
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