import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { LoginDetails } from '../../../Login/LoginReducer/LoginSlice';
import "./ViewReportScreen.css"
import Cookies from "universal-cookie";

const ViewReportsScreen = () => {
  const ReportsDetailsRedux = useSelector((state) => state.ReportDetails.value);
  const dispatch = useDispatch()
  const cookies = new Cookies()
  const navigate = useNavigate()
  return (
    
    <div>

<div className='ReviewReports py-2'>
<NavLink className="leftHBar" to="">
         <svg
           width="25"
           height="23"
           viewBox="0 0 25 23"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M1.5625 21C1.5625 21.8789 2.24609 22.5625 3.125 22.5625H21.875C22.7051 22.5625 23.4375 21.8789 23.4375 21V6.9375H1.5625V21ZM9.375 10.6484C9.375 10.3555 9.61914 10.0625 9.96094 10.0625H15.0391C15.332 10.0625 15.625 10.3555 15.625 10.6484V11.0391C15.625 11.3809 15.332 11.625 15.0391 11.625H9.96094C9.61914 11.625 9.375 11.3809 9.375 11.0391V10.6484ZM23.4375 0.6875H1.5625C0.683594 0.6875 0 1.41992 0 2.25V4.59375C0 5.0332 0.341797 5.375 0.78125 5.375H24.2188C24.6094 5.375 25 5.0332 25 4.59375V2.25C25 1.41992 24.2676 0.6875 23.4375 0.6875Z"
             fill="white"
           />
         </svg>
       
       <div className="textHome mx-2 text-white">Review Reports</div>
       </NavLink>

</div>




<div className='colorbox'>

<p><svg width="50" height="25" viewBox="1 0 48 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="45" height="24" rx="12" fill="#00A900"/>
<path d="M6.38438 12.08C6.01104 12.08 5.67504 12.0347 5.37638 11.944C5.07771 11.848 4.79238 11.6827 4.52038 11.448C4.45104 11.3893 4.39771 11.3227 4.36038 11.248C4.32304 11.1733 4.30438 11.0987 4.30438 11.024C4.30438 10.9013 4.34704 10.7947 4.43238 10.704C4.52304 10.608 4.63504 10.56 4.76838 10.56C4.86971 10.56 4.96038 10.592 5.04037 10.656C5.24304 10.8213 5.44304 10.9467 5.64038 11.032C5.84304 11.1173 6.09104 11.16 6.38438 11.16C6.58171 11.16 6.76304 11.1307 6.92838 11.072C7.09371 11.008 7.22704 10.9253 7.32838 10.824C7.42971 10.7173 7.48038 10.5973 7.48038 10.464C7.48038 10.304 7.43238 10.168 7.33638 10.056C7.24038 9.944 7.09371 9.85067 6.89638 9.776C6.69904 9.696 6.44838 9.63467 6.14438 9.592C5.85638 9.54933 5.60304 9.48533 5.38438 9.4C5.16571 9.30933 4.98171 9.19733 4.83238 9.064C4.68838 8.92533 4.57904 8.76533 4.50438 8.584C4.42971 8.39733 4.39238 8.18933 4.39238 7.96C4.39238 7.61333 4.48038 7.31733 4.65638 7.072C4.83771 6.82667 5.08038 6.64 5.38438 6.512C5.68838 6.384 6.02438 6.32 6.39238 6.32C6.73904 6.32 7.05904 6.37333 7.35238 6.48C7.65104 6.58133 7.89371 6.712 8.08038 6.872C8.23504 6.99467 8.31238 7.136 8.31238 7.296C8.31238 7.41333 8.26704 7.52 8.17638 7.616C8.08571 7.712 7.97904 7.76 7.85638 7.76C7.77638 7.76 7.70438 7.736 7.64038 7.688C7.55504 7.61333 7.44038 7.544 7.29638 7.48C7.15238 7.41067 7.00038 7.35467 6.84038 7.312C6.68038 7.264 6.53104 7.24 6.39238 7.24C6.16304 7.24 5.96838 7.26933 5.80838 7.328C5.65371 7.38667 5.53638 7.46667 5.45638 7.568C5.37638 7.66933 5.33638 7.78667 5.33638 7.92C5.33638 8.08 5.38171 8.21333 5.47238 8.32C5.56838 8.42133 5.70438 8.504 5.88038 8.568C6.05638 8.62667 6.26704 8.68 6.51238 8.728C6.83238 8.78667 7.11238 8.856 7.35238 8.936C7.59771 9.016 7.80038 9.12 7.96038 9.248C8.12038 9.37067 8.24038 9.528 8.32038 9.72C8.40038 9.90667 8.44038 10.136 8.44038 10.408C8.44038 10.7547 8.34438 11.0533 8.15238 11.304C7.96038 11.5547 7.70704 11.7467 7.39238 11.88C7.08304 12.0133 6.74704 12.08 6.38438 12.08ZM12.4538 7.72C12.5925 7.72 12.7071 7.768 12.7978 7.864C12.8885 7.95467 12.9338 8.06933 12.9338 8.208V10.24C12.9338 10.8053 12.7765 11.2533 12.4618 11.584C12.1471 11.9147 11.6938 12.08 11.1018 12.08C10.5098 12.08 10.0565 11.9147 9.74181 11.584C9.43248 11.2533 9.27781 10.8053 9.27781 10.24V8.208C9.27781 8.06933 9.32315 7.95467 9.41381 7.864C9.50448 7.768 9.61915 7.72 9.75781 7.72C9.89648 7.72 10.0111 7.768 10.1018 7.864C10.1925 7.95467 10.2378 8.06933 10.2378 8.208V10.24C10.2378 10.5653 10.3098 10.808 10.4538 10.968C10.5978 11.1227 10.8138 11.2 11.1018 11.2C11.3951 11.2 11.6138 11.1227 11.7578 10.968C11.9018 10.808 11.9738 10.5653 11.9738 10.24V8.208C11.9738 8.06933 12.0191 7.95467 12.1098 7.864C12.2005 7.768 12.3151 7.72 12.4538 7.72ZM16.1891 7.64C16.5625 7.64 16.8958 7.736 17.1891 7.928C17.4878 8.11467 17.7225 8.37333 17.8931 8.704C18.0691 9.03467 18.1571 9.41867 18.1571 9.856C18.1571 10.2933 18.0691 10.68 17.8931 11.016C17.7225 11.3467 17.4905 11.608 17.1971 11.8C16.9091 11.9867 16.5838 12.08 16.2211 12.08C16.0078 12.08 15.8078 12.0453 15.6211 11.976C15.4345 11.9067 15.2691 11.8187 15.1251 11.712C14.9865 11.6053 14.8771 11.4987 14.7971 11.392C14.7225 11.28 14.6851 11.1867 14.6851 11.112L14.9331 11.008V11.592C14.9331 11.7307 14.8878 11.848 14.7971 11.944C14.7065 12.0347 14.5918 12.08 14.4531 12.08C14.3145 12.08 14.1998 12.0347 14.1091 11.944C14.0185 11.8533 13.9731 11.736 13.9731 11.592V6.568C13.9731 6.42933 14.0185 6.31467 14.1091 6.224C14.1998 6.128 14.3145 6.08 14.4531 6.08C14.5918 6.08 14.7065 6.128 14.7971 6.224C14.8878 6.31467 14.9331 6.42933 14.9331 6.568V8.6L14.7971 8.528C14.7971 8.45867 14.8345 8.376 14.9091 8.28C14.9838 8.17867 15.0851 8.08 15.2131 7.984C15.3411 7.88267 15.4878 7.8 15.6531 7.736C15.8238 7.672 16.0025 7.64 16.1891 7.64ZM16.0691 8.52C15.8345 8.52 15.6291 8.57867 15.4531 8.696C15.2771 8.81333 15.1385 8.97333 15.0371 9.176C14.9411 9.37333 14.8931 9.6 14.8931 9.856C14.8931 10.1067 14.9411 10.336 15.0371 10.544C15.1385 10.7467 15.2771 10.9067 15.4531 11.024C15.6291 11.1413 15.8345 11.2 16.0691 11.2C16.3038 11.2 16.5065 11.1413 16.6771 11.024C16.8531 10.9067 16.9891 10.7467 17.0851 10.544C17.1865 10.336 17.2371 10.1067 17.2371 9.856C17.2371 9.6 17.1865 9.37333 17.0851 9.176C16.9891 8.97333 16.8531 8.81333 16.6771 8.696C16.5065 8.57867 16.3038 8.52 16.0691 8.52ZM21.2446 7.64C21.6712 7.64 21.9859 7.744 22.1886 7.952C22.3912 8.15467 22.5246 8.41867 22.5886 8.744L22.4526 8.672L22.5166 8.544C22.5806 8.42133 22.6792 8.29067 22.8126 8.152C22.9459 8.008 23.1059 7.888 23.2926 7.792C23.4846 7.69067 23.6979 7.64 23.9326 7.64C24.3166 7.64 24.6072 7.72267 24.8046 7.888C25.0072 8.05333 25.1459 8.27467 25.2206 8.552C25.2952 8.824 25.3326 9.128 25.3326 9.464V11.512C25.3326 11.6507 25.2872 11.768 25.1966 11.864C25.1059 11.9547 24.9912 12 24.8526 12C24.7139 12 24.5992 11.9547 24.5086 11.864C24.4179 11.768 24.3726 11.6507 24.3726 11.512V9.464C24.3726 9.288 24.3512 9.13067 24.3086 8.992C24.2659 8.848 24.1886 8.73333 24.0766 8.648C23.9646 8.56267 23.8046 8.52 23.5966 8.52C23.3939 8.52 23.2206 8.56267 23.0766 8.648C22.9326 8.73333 22.8232 8.848 22.7486 8.992C22.6792 9.13067 22.6446 9.288 22.6446 9.464V11.512C22.6446 11.6507 22.5992 11.768 22.5086 11.864C22.4179 11.9547 22.3032 12 22.1646 12C22.0259 12 21.9112 11.9547 21.8206 11.864C21.7299 11.768 21.6846 11.6507 21.6846 11.512V9.464C21.6846 9.288 21.6632 9.13067 21.6206 8.992C21.5779 8.848 21.5006 8.73333 21.3886 8.648C21.2766 8.56267 21.1166 8.52 20.9086 8.52C20.7059 8.52 20.5326 8.56267 20.3886 8.648C20.2446 8.73333 20.1352 8.848 20.0606 8.992C19.9912 9.13067 19.9566 9.288 19.9566 9.464V11.512C19.9566 11.6507 19.9112 11.768 19.8206 11.864C19.7299 11.9547 19.6152 12 19.4766 12C19.3379 12 19.2232 11.9547 19.1326 11.864C19.0419 11.768 18.9966 11.6507 18.9966 11.512V8.208C18.9966 8.06933 19.0419 7.95467 19.1326 7.864C19.2232 7.768 19.3379 7.72 19.4766 7.72C19.6152 7.72 19.7299 7.768 19.8206 7.864C19.9112 7.95467 19.9566 8.06933 19.9566 8.208V8.552L19.8366 8.528C19.8846 8.43733 19.9512 8.34133 20.0366 8.24C20.1219 8.13333 20.2259 8.03467 20.3486 7.944C20.4712 7.85333 20.6072 7.78133 20.7566 7.728C20.9059 7.66933 21.0686 7.64 21.2446 7.64ZM27.2756 11.512C27.2756 11.6507 27.2302 11.768 27.1396 11.864C27.0489 11.9547 26.9342 12 26.7956 12C26.6569 12 26.5422 11.9547 26.4516 11.864C26.3609 11.768 26.3156 11.6507 26.3156 11.512V8.208C26.3156 8.06933 26.3609 7.95467 26.4516 7.864C26.5422 7.768 26.6569 7.72 26.7956 7.72C26.9342 7.72 27.0489 7.768 27.1396 7.864C27.2302 7.95467 27.2756 8.06933 27.2756 8.208V11.512ZM26.7876 7.2C26.6062 7.2 26.4782 7.17067 26.4036 7.112C26.3289 7.05333 26.2916 6.94933 26.2916 6.8V6.648C26.2916 6.49333 26.3316 6.38933 26.4116 6.336C26.4969 6.27733 26.6249 6.248 26.7956 6.248C26.9822 6.248 27.1129 6.27733 27.1876 6.336C27.2622 6.39467 27.2996 6.49867 27.2996 6.648V6.8C27.2996 6.95467 27.2596 7.06133 27.1796 7.12C27.0996 7.17333 26.9689 7.2 26.7876 7.2ZM28.3102 7.8H30.2062C30.3342 7.8 30.4409 7.84267 30.5262 7.928C30.6115 8.01333 30.6542 8.12 30.6542 8.248C30.6542 8.37067 30.6115 8.47467 30.5262 8.56C30.4409 8.64 30.3342 8.68 30.2062 8.68H28.3102C28.1822 8.68 28.0755 8.63733 27.9902 8.552C27.9049 8.46667 27.8622 8.36 27.8622 8.232C27.8622 8.10933 27.9049 8.008 27.9902 7.928C28.0755 7.84267 28.1822 7.8 28.3102 7.8ZM29.1662 6.8C29.3049 6.8 29.4169 6.848 29.5022 6.944C29.5929 7.03467 29.6382 7.14933 29.6382 7.288V10.848C29.6382 10.9227 29.6515 10.984 29.6782 11.032C29.7102 11.08 29.7502 11.1147 29.7982 11.136C29.8515 11.1573 29.9075 11.168 29.9662 11.168C30.0302 11.168 30.0889 11.1573 30.1422 11.136C30.1955 11.1093 30.2569 11.096 30.3262 11.096C30.4009 11.096 30.4675 11.1307 30.5262 11.2C30.5902 11.2693 30.6222 11.3653 30.6222 11.488C30.6222 11.6373 30.5395 11.76 30.3742 11.856C30.2142 11.952 30.0409 12 29.8542 12C29.7422 12 29.6169 11.992 29.4782 11.976C29.3449 11.9547 29.2169 11.9093 29.0942 11.84C28.9769 11.7653 28.8782 11.6533 28.7982 11.504C28.7182 11.3547 28.6782 11.1493 28.6782 10.888V7.288C28.6782 7.14933 28.7235 7.03467 28.8142 6.944C28.9102 6.848 29.0275 6.8 29.1662 6.8ZM4.9885 18C4.83917 18 4.70583 17.9547 4.5885 17.864C4.47117 17.768 4.4125 17.6507 4.4125 17.512V12.888C4.4125 12.7493 4.45783 12.6347 4.5485 12.544C4.6445 12.448 4.76183 12.4 4.9005 12.4H7.2045C7.48183 12.4 7.7405 12.4747 7.9805 12.624C8.22583 12.768 8.42317 12.9707 8.5725 13.232C8.72183 13.488 8.7965 13.784 8.7965 14.12C8.7965 14.3227 8.75383 14.52 8.6685 14.712C8.5885 14.904 8.4765 15.0773 8.3325 15.232C8.19383 15.3867 8.0365 15.5067 7.8605 15.592L7.8685 15.408C8.01783 15.488 8.1405 15.584 8.2365 15.696C8.33783 15.8027 8.41517 15.92 8.4685 16.048C8.52717 16.1707 8.56183 16.304 8.5725 16.448C8.59383 16.5813 8.60717 16.6987 8.6125 16.8C8.62317 16.9013 8.63917 16.9867 8.6605 17.056C8.68717 17.1253 8.73517 17.1787 8.8045 17.216C8.92183 17.2853 8.99383 17.3867 9.0205 17.52C9.0525 17.648 9.02317 17.7627 8.9325 17.864C8.87383 17.9333 8.79917 17.9787 8.7085 18C8.61783 18.016 8.52717 18.016 8.4365 18C8.34583 17.9787 8.27117 17.952 8.2125 17.92C8.12183 17.8667 8.03117 17.7893 7.9405 17.688C7.84983 17.5813 7.77517 17.44 7.7165 17.264C7.66317 17.088 7.6365 16.8613 7.6365 16.584C7.6365 16.4933 7.6205 16.4107 7.5885 16.336C7.5565 16.256 7.51117 16.1893 7.4525 16.136C7.39383 16.0773 7.31917 16.0347 7.2285 16.008C7.13783 15.976 7.03117 15.96 6.9085 15.96H5.2925L5.4125 15.776V17.512C5.4125 17.6507 5.37517 17.768 5.3005 17.864C5.22583 17.9547 5.12183 18 4.9885 18ZM5.3005 15.136H7.1645C7.2605 15.136 7.35383 15.0933 7.4445 15.008C7.53517 14.9173 7.60983 14.7973 7.6685 14.648C7.72717 14.4933 7.7565 14.3253 7.7565 14.144C7.7565 13.9093 7.6925 13.7147 7.5645 13.56C7.44183 13.4 7.3085 13.32 7.1645 13.32H5.3165L5.4125 13.064V15.328L5.3005 15.136ZM11.8016 18.08C11.3483 18.08 10.9536 17.9867 10.6176 17.8C10.287 17.608 10.031 17.3493 9.84963 17.024C9.67363 16.6987 9.58563 16.3307 9.58563 15.92C9.58563 15.44 9.68163 15.032 9.87363 14.696C10.071 14.3547 10.327 14.0933 10.6416 13.912C10.9563 13.7307 11.2896 13.64 11.6416 13.64C11.9136 13.64 12.1696 13.696 12.4096 13.808C12.655 13.92 12.871 14.0747 13.0576 14.272C13.2443 14.464 13.391 14.688 13.4976 14.944C13.6096 15.2 13.6656 15.472 13.6656 15.76C13.6603 15.888 13.6096 15.992 13.5136 16.072C13.4176 16.152 13.3056 16.192 13.1776 16.192H10.1216L9.88163 15.392H12.8176L12.6416 15.552V15.336C12.631 15.1813 12.575 15.0427 12.4736 14.92C12.3776 14.7973 12.255 14.7013 12.1056 14.632C11.9616 14.5573 11.807 14.52 11.6416 14.52C11.4816 14.52 11.3323 14.5413 11.1936 14.584C11.055 14.6267 10.935 14.6987 10.8336 14.8C10.7323 14.9013 10.6523 15.0373 10.5936 15.208C10.535 15.3787 10.5056 15.5947 10.5056 15.856C10.5056 16.144 10.5643 16.3893 10.6816 16.592C10.8043 16.7893 10.959 16.9413 11.1456 17.048C11.3376 17.1493 11.5403 17.2 11.7536 17.2C11.951 17.2 12.1083 17.184 12.2256 17.152C12.343 17.12 12.4363 17.0827 12.5056 17.04C12.5803 16.992 12.647 16.952 12.7056 16.92C12.8016 16.872 12.8923 16.848 12.9776 16.848C13.095 16.848 13.191 16.888 13.2656 16.968C13.3456 17.048 13.3856 17.1413 13.3856 17.248C13.3856 17.392 13.311 17.5227 13.1616 17.64C13.023 17.7573 12.8283 17.8613 12.5776 17.952C12.327 18.0373 12.0683 18.08 11.8016 18.08ZM14.6573 13.72C14.7586 13.72 14.852 13.7467 14.9373 13.8C15.0226 13.848 15.0866 13.9227 15.1293 14.024L16.3053 16.712L16.1293 16.792L17.3293 14.032C17.42 13.8187 17.5613 13.7173 17.7533 13.728C17.8866 13.728 17.9933 13.7707 18.0733 13.856C18.1586 13.936 18.2013 14.0373 18.2013 14.16C18.2013 14.1973 18.1933 14.2373 18.1773 14.28C18.1666 14.3227 18.1533 14.3627 18.1373 14.4L16.6413 17.696C16.556 17.888 16.42 17.9893 16.2333 18C16.132 18.016 16.0333 17.9973 15.9373 17.944C15.8466 17.8907 15.7773 17.808 15.7293 17.696L14.2413 14.4C14.2306 14.3733 14.2173 14.3387 14.2013 14.296C14.1906 14.2533 14.1853 14.2027 14.1853 14.144C14.1853 14.048 14.228 13.9547 14.3133 13.864C14.3986 13.768 14.5133 13.72 14.6573 13.72ZM19.8615 17.512C19.8615 17.6507 19.8162 17.768 19.7255 17.864C19.6348 17.9547 19.5202 18 19.3815 18C19.2428 18 19.1282 17.9547 19.0375 17.864C18.9468 17.768 18.9015 17.6507 18.9015 17.512V14.208C18.9015 14.0693 18.9468 13.9547 19.0375 13.864C19.1282 13.768 19.2428 13.72 19.3815 13.72C19.5202 13.72 19.6348 13.768 19.7255 13.864C19.8162 13.9547 19.8615 14.0693 19.8615 14.208V17.512ZM19.3735 13.2C19.1922 13.2 19.0642 13.1707 18.9895 13.112C18.9148 13.0533 18.8775 12.9493 18.8775 12.8V12.648C18.8775 12.4933 18.9175 12.3893 18.9975 12.336C19.0828 12.2773 19.2108 12.248 19.3815 12.248C19.5682 12.248 19.6988 12.2773 19.7735 12.336C19.8482 12.3947 19.8855 12.4987 19.8855 12.648V12.8C19.8855 12.9547 19.8455 13.0613 19.7655 13.12C19.6855 13.1733 19.5548 13.2 19.3735 13.2ZM22.8641 18.08C22.4108 18.08 22.0161 17.9867 21.6801 17.8C21.3495 17.608 21.0935 17.3493 20.9121 17.024C20.7361 16.6987 20.6481 16.3307 20.6481 15.92C20.6481 15.44 20.7441 15.032 20.9361 14.696C21.1335 14.3547 21.3895 14.0933 21.7041 13.912C22.0188 13.7307 22.3521 13.64 22.7041 13.64C22.9761 13.64 23.2321 13.696 23.4721 13.808C23.7175 13.92 23.9335 14.0747 24.1201 14.272C24.3068 14.464 24.4535 14.688 24.5601 14.944C24.6721 15.2 24.7281 15.472 24.7281 15.76C24.7228 15.888 24.6721 15.992 24.5761 16.072C24.4801 16.152 24.3681 16.192 24.2401 16.192H21.1841L20.9441 15.392H23.8801L23.7041 15.552V15.336C23.6935 15.1813 23.6375 15.0427 23.5361 14.92C23.4401 14.7973 23.3175 14.7013 23.1681 14.632C23.0241 14.5573 22.8695 14.52 22.7041 14.52C22.5441 14.52 22.3948 14.5413 22.2561 14.584C22.1175 14.6267 21.9975 14.6987 21.8961 14.8C21.7948 14.9013 21.7148 15.0373 21.6561 15.208C21.5975 15.3787 21.5681 15.5947 21.5681 15.856C21.5681 16.144 21.6268 16.3893 21.7441 16.592C21.8668 16.7893 22.0215 16.9413 22.2081 17.048C22.4001 17.1493 22.6028 17.2 22.8161 17.2C23.0135 17.2 23.1708 17.184 23.2881 17.152C23.4055 17.12 23.4988 17.0827 23.5681 17.04C23.6428 16.992 23.7095 16.952 23.7681 16.92C23.8641 16.872 23.9548 16.848 24.0401 16.848C24.1575 16.848 24.2535 16.888 24.3281 16.968C24.4081 17.048 24.4481 17.1413 24.4481 17.248C24.4481 17.392 24.3735 17.5227 24.2241 17.64C24.0855 17.7573 23.8908 17.8613 23.6401 17.952C23.3895 18.0373 23.1308 18.08 22.8641 18.08ZM30.4949 13.72C30.6175 13.72 30.7242 13.768 30.8149 13.864C30.9055 13.9547 30.9509 14.072 30.9509 14.216C30.9509 14.2533 30.9482 14.288 30.9429 14.32C30.9375 14.3467 30.9295 14.3733 30.9189 14.4L29.6949 17.696C29.6575 17.8027 29.5909 17.8853 29.4949 17.944C29.3989 17.9973 29.2975 18.016 29.1909 18C29.0095 17.9893 28.8735 17.888 28.7829 17.696L27.9909 15.416L28.1989 15.424L27.4549 17.696C27.3642 17.888 27.2282 17.9893 27.0469 18C26.9455 18.016 26.8442 17.9973 26.7429 17.944C26.6469 17.8853 26.5802 17.8027 26.5429 17.696L25.3189 14.4C25.2975 14.3413 25.2869 14.28 25.2869 14.216C25.2869 14.088 25.3295 13.9733 25.4149 13.872C25.5002 13.7707 25.6175 13.72 25.7669 13.72C25.8682 13.72 25.9589 13.744 26.0389 13.792C26.1189 13.84 26.1749 13.9173 26.2069 14.024L27.1749 16.648L26.9749 16.632L27.7029 14.656C27.7882 14.4587 27.9349 14.36 28.1429 14.36C28.2602 14.36 28.3482 14.3867 28.4069 14.44C28.4709 14.488 28.5215 14.56 28.5589 14.656L29.2869 16.632L29.0469 16.664L30.0309 14.024C30.0949 13.8213 30.2495 13.72 30.4949 13.72Z" fill="white"/>
<path d="M42 9H34C33.4477 9 33 9.44772 33 10V10.5C33 11.0523 33.4477 11.5 34 11.5H42C42.5523 11.5 43 11.0523 43 10.5V10C43 9.44772 42.5523 9 42 9Z" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34 11.5V16C34 16.2652 34.1054 16.5196 34.2929 16.7071C34.4804 16.8946 34.7348 17 35 17H41C41.2652 17 41.5196 16.8946 41.7071 16.7071C41.8946 16.5196 42 16.2652 42 16V11.5" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

<svg width="50" height="25" viewBox="1 0 48 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="45" height="24" rx="12" fill="#FFCA23"/>
<path d="M14.1901 9.4C14.3181 9.4 14.4301 9.448 14.5261 9.544C14.6275 9.63467 14.6781 9.74933 14.6781 9.888V14.512C14.6781 14.6507 14.6275 14.768 14.5261 14.864C14.4248 14.9547 14.3075 15 14.1741 15C14.0248 15 13.9048 14.9547 13.8141 14.864C13.7235 14.768 13.6781 14.6507 13.6781 14.512V9.888C13.6781 9.74933 13.7261 9.63467 13.8221 9.544C13.9181 9.448 14.0408 9.4 14.1901 9.4ZM17.7341 9.4C17.8835 9.4 18.0035 9.448 18.0941 9.544C18.1848 9.63467 18.2301 9.74933 18.2301 9.888V14.512C18.2301 14.6507 18.1821 14.768 18.0861 14.864C17.9955 14.9547 17.8728 15 17.7181 15C17.5901 15 17.4755 14.9547 17.3741 14.864C17.2781 14.768 17.2301 14.6507 17.2301 14.512V9.888C17.2301 9.74933 17.2808 9.63467 17.3821 9.544C17.4835 9.448 17.6008 9.4 17.7341 9.4ZM14.1661 11.728H17.7341V12.648H14.1661V11.728ZM23.5001 12.864C23.5001 13.3013 23.4015 13.688 23.2041 14.024C23.0121 14.3547 22.7508 14.6133 22.4201 14.8C22.0948 14.9867 21.7295 15.08 21.3241 15.08C20.9188 15.08 20.5508 14.9867 20.2201 14.8C19.8948 14.6133 19.6335 14.3547 19.4361 14.024C19.2441 13.688 19.1481 13.3013 19.1481 12.864C19.1481 12.4267 19.2441 12.0427 19.4361 11.712C19.6335 11.376 19.8948 11.1147 20.2201 10.928C20.5508 10.736 20.9188 10.64 21.3241 10.64C21.7295 10.64 22.0948 10.736 22.4201 10.928C22.7508 11.1147 23.0121 11.376 23.2041 11.712C23.4015 12.0427 23.5001 12.4267 23.5001 12.864ZM22.5401 12.864C22.5401 12.592 22.4841 12.3573 22.3721 12.16C22.2655 11.9573 22.1188 11.8 21.9321 11.688C21.7508 11.576 21.5481 11.52 21.3241 11.52C21.1001 11.52 20.8948 11.576 20.7081 11.688C20.5268 11.8 20.3801 11.9573 20.2681 12.16C20.1615 12.3573 20.1081 12.592 20.1081 12.864C20.1081 13.1307 20.1615 13.3653 20.2681 13.568C20.3801 13.7653 20.5268 13.92 20.7081 14.032C20.8948 14.144 21.1001 14.2 21.3241 14.2C21.5481 14.2 21.7508 14.144 21.9321 14.032C22.1188 13.92 22.2655 13.7653 22.3721 13.568C22.4841 13.3653 22.5401 13.1307 22.5401 12.864ZM25.3803 14.512C25.3803 14.6507 25.3323 14.768 25.2363 14.864C25.1456 14.9547 25.031 15 24.8923 15C24.759 15 24.647 14.9547 24.5563 14.864C24.4656 14.768 24.4203 14.6507 24.4203 14.512V9.568C24.4203 9.42933 24.4656 9.31467 24.5563 9.224C24.6523 9.128 24.7696 9.08 24.9083 9.08C25.047 9.08 25.159 9.128 25.2443 9.224C25.335 9.31467 25.3803 9.42933 25.3803 9.568V14.512ZM29.9224 9.08C30.0611 9.08 30.1758 9.12533 30.2664 9.216C30.3571 9.30667 30.4024 9.424 30.4024 9.568V14.512C30.4024 14.6507 30.3571 14.768 30.2664 14.864C30.1758 14.9547 30.0611 15 29.9224 15C29.7838 15 29.6691 14.9547 29.5784 14.864C29.4878 14.768 29.4424 14.6507 29.4424 14.512V14.12L29.6184 14.192C29.6184 14.2613 29.5811 14.3467 29.5064 14.448C29.4318 14.544 29.3304 14.64 29.2024 14.736C29.0744 14.832 28.9224 14.9147 28.7464 14.984C28.5758 15.048 28.3891 15.08 28.1864 15.08C27.8184 15.08 27.4851 14.9867 27.1864 14.8C26.8878 14.608 26.6504 14.3467 26.4744 14.016C26.3038 13.68 26.2184 13.296 26.2184 12.864C26.2184 12.4267 26.3038 12.0427 26.4744 11.712C26.6504 11.376 26.8851 11.1147 27.1784 10.928C27.4718 10.736 27.7971 10.64 28.1544 10.64C28.3838 10.64 28.5944 10.6747 28.7864 10.744C28.9784 10.8133 29.1438 10.9013 29.2824 11.008C29.4264 11.1147 29.5358 11.224 29.6104 11.336C29.6904 11.4427 29.7304 11.5333 29.7304 11.608L29.4424 11.712V9.568C29.4424 9.42933 29.4878 9.31467 29.5784 9.224C29.6691 9.128 29.7838 9.08 29.9224 9.08ZM28.3064 14.2C28.5411 14.2 28.7464 14.1413 28.9224 14.024C29.0984 13.9067 29.2344 13.7467 29.3304 13.544C29.4318 13.3413 29.4824 13.1147 29.4824 12.864C29.4824 12.608 29.4318 12.3787 29.3304 12.176C29.2344 11.9733 29.0984 11.8133 28.9224 11.696C28.7464 11.5787 28.5411 11.52 28.3064 11.52C28.0771 11.52 27.8744 11.5787 27.6984 11.696C27.5224 11.8133 27.3838 11.9733 27.2824 12.176C27.1864 12.3787 27.1384 12.608 27.1384 12.864C27.1384 13.1147 27.1864 13.3413 27.2824 13.544C27.3838 13.7467 27.5224 13.9067 27.6984 14.024C27.8744 14.1413 28.0771 14.2 28.3064 14.2Z" fill="white"/>
<g clipPath="url(#clip0_73_15504)">
<path d="M41 11.5V9C41 8.73478 40.8946 8.48043 40.7071 8.29289C40.5196 8.10536 40.2652 8 40 8C39.7348 8 39.4804 8.10536 39.2929 8.29289C39.1054 8.48043 39 8.73478 39 9" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M39 11V8C39 7.73478 38.8946 7.48043 38.7071 7.29289C38.5196 7.10536 38.2652 7 38 7C37.7348 7 37.4804 7.10536 37.2929 7.29289C37.1054 7.48043 37 7.73478 37 8V9" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M37 11.25V9C37 8.73478 36.8946 8.48043 36.7071 8.29289C36.5196 8.10536 36.2652 8 36 8C35.7348 8 35.4804 8.10536 35.2929 8.29289C35.1054 8.48043 35 8.73478 35 9V13" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M41.0001 10C41.0001 9.73478 41.1054 9.48043 41.2929 9.29289C41.4805 9.10536 41.7348 9 42.0001 9C42.2653 9 42.5196 9.10536 42.7072 9.29289C42.8947 9.48043 43.0001 9.73478 43.0001 10V13C43.0001 14.0609 42.5786 15.0783 41.8285 15.8284C41.0783 16.5786 40.0609 17 39.0001 17H38.0001C36.6001 17 35.7501 16.57 35.0051 15.83L33.2051 14.03C33.033 13.8395 32.9408 13.5901 32.9476 13.3335C32.9544 13.0769 33.0596 12.8327 33.2414 12.6515C33.4232 12.4703 33.6678 12.366 33.9244 12.3601C34.1811 12.3542 34.4301 12.4473 34.6201 12.62L35.5001 13.5" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_73_15504">
<rect width="12" height="12" fill="white" transform="translate(32 6)"/>
</clipPath>
</defs>
</svg>

<svg width="50" height="25" viewBox="1 0 48 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="45" height="24" rx="12" fill="#E13030"/>
<path d="M8.60203 9.672C8.7407 9.74133 8.8207 9.85067 8.84203 10C8.8687 10.1493 8.83136 10.2853 8.73003 10.408C8.6607 10.504 8.57003 10.5573 8.45803 10.568C8.35136 10.5787 8.24203 10.5573 8.13003 10.504C8.00203 10.4453 7.86603 10.4 7.72203 10.368C7.58336 10.336 7.4367 10.32 7.28203 10.32C6.99403 10.32 6.73536 10.3653 6.50603 10.456C6.28203 10.5467 6.09003 10.6773 5.93003 10.848C5.77003 11.0133 5.64736 11.2107 5.56203 11.44C5.48203 11.6693 5.44203 11.9227 5.44203 12.2C5.44203 12.5253 5.48736 12.808 5.57803 13.048C5.67403 13.288 5.8047 13.488 5.97003 13.648C6.13536 13.808 6.33003 13.928 6.55403 14.008C6.77803 14.0827 7.0207 14.12 7.28203 14.12C7.42603 14.12 7.57003 14.1067 7.71403 14.08C7.85803 14.0533 7.9967 14.0053 8.13003 13.936C8.24203 13.8827 8.35136 13.864 8.45803 13.88C8.57003 13.896 8.66336 13.952 8.73803 14.048C8.8447 14.1813 8.88203 14.32 8.85003 14.464C8.82336 14.6027 8.74336 14.704 8.61003 14.768C8.47136 14.8373 8.32736 14.896 8.17803 14.944C8.03403 14.9867 7.88736 15.0187 7.73803 15.04C7.5887 15.0667 7.4367 15.08 7.28203 15.08C6.89803 15.08 6.5327 15.0187 6.18603 14.896C5.8447 14.7733 5.53803 14.592 5.26603 14.352C4.99936 14.112 4.7887 13.8133 4.63403 13.456C4.47936 13.0933 4.40203 12.6747 4.40203 12.2C4.40203 11.7893 4.47136 11.4107 4.61003 11.064C4.75403 10.7173 4.95403 10.4187 5.21003 10.168C5.47136 9.912 5.77803 9.71467 6.13003 9.576C6.48203 9.432 6.86603 9.36 7.28203 9.36C7.5167 9.36 7.74603 9.38667 7.97003 9.44C8.19403 9.49333 8.4047 9.57067 8.60203 9.672ZM13.1217 10.64C13.2603 10.64 13.375 10.6853 13.4657 10.776C13.5563 10.8667 13.6017 10.984 13.6017 11.128V14.512C13.6017 14.6507 13.5563 14.768 13.4657 14.864C13.375 14.9547 13.2603 15 13.1217 15C12.983 15 12.8683 14.9547 12.7777 14.864C12.687 14.768 12.6417 14.6507 12.6417 14.512V14.12L12.8177 14.192C12.8177 14.2613 12.7803 14.3467 12.7057 14.448C12.631 14.544 12.5297 14.64 12.4017 14.736C12.2737 14.832 12.1217 14.9147 11.9457 14.984C11.775 15.048 11.5883 15.08 11.3857 15.08C11.0177 15.08 10.6843 14.9867 10.3857 14.8C10.087 14.608 9.84966 14.3467 9.67366 14.016C9.50299 13.68 9.41766 13.296 9.41766 12.864C9.41766 12.4267 9.50299 12.0427 9.67366 11.712C9.84966 11.376 10.0843 11.1147 10.3777 10.928C10.671 10.736 10.9963 10.64 11.3537 10.64C11.583 10.64 11.7937 10.6747 11.9857 10.744C12.1777 10.8133 12.343 10.9013 12.4817 11.008C12.6257 11.1147 12.735 11.224 12.8097 11.336C12.8897 11.4427 12.9297 11.5333 12.9297 11.608L12.6417 11.712V11.128C12.6417 10.9893 12.687 10.8747 12.7777 10.784C12.8683 10.688 12.983 10.64 13.1217 10.64ZM11.5057 14.2C11.7403 14.2 11.9457 14.1413 12.1217 14.024C12.2977 13.9067 12.4337 13.7467 12.5297 13.544C12.631 13.3413 12.6817 13.1147 12.6817 12.864C12.6817 12.608 12.631 12.3787 12.5297 12.176C12.4337 11.9733 12.2977 11.8133 12.1217 11.696C11.9457 11.5787 11.7403 11.52 11.5057 11.52C11.2763 11.52 11.0737 11.5787 10.8977 11.696C10.7217 11.8133 10.583 11.9733 10.4817 12.176C10.3857 12.3787 10.3377 12.608 10.3377 12.864C10.3377 13.1147 10.3857 13.3413 10.4817 13.544C10.583 13.7467 10.7217 13.9067 10.8977 14.024C11.0737 14.1413 11.2763 14.2 11.5057 14.2ZM16.9291 10.64C17.3238 10.64 17.6224 10.7227 17.8251 10.888C18.0331 11.0533 18.1744 11.2747 18.2491 11.552C18.3291 11.824 18.3691 12.128 18.3691 12.464V14.512C18.3691 14.6507 18.3238 14.768 18.2331 14.864C18.1424 14.9547 18.0278 15 17.8891 15C17.7504 15 17.6358 14.9547 17.5451 14.864C17.4544 14.768 17.4091 14.6507 17.4091 14.512V12.464C17.4091 12.288 17.3851 12.1307 17.3371 11.992C17.2944 11.848 17.2144 11.7333 17.0971 11.648C16.9798 11.5627 16.8118 11.52 16.5931 11.52C16.3798 11.52 16.1984 11.5627 16.0491 11.648C15.9051 11.7333 15.7931 11.848 15.7131 11.992C15.6384 12.1307 15.6011 12.288 15.6011 12.464V14.512C15.6011 14.6507 15.5558 14.768 15.4651 14.864C15.3744 14.9547 15.2598 15 15.1211 15C14.9824 15 14.8678 14.9547 14.7771 14.864C14.6864 14.768 14.6411 14.6507 14.6411 14.512V11.208C14.6411 11.0693 14.6864 10.9547 14.7771 10.864C14.8678 10.768 14.9824 10.72 15.1211 10.72C15.2598 10.72 15.3744 10.768 15.4651 10.864C15.5558 10.9547 15.6011 11.0693 15.6011 11.208V11.552L15.4811 11.528C15.5291 11.4373 15.5984 11.3413 15.6891 11.24C15.7798 11.1333 15.8864 11.0347 16.0091 10.944C16.1318 10.8533 16.2704 10.7813 16.4251 10.728C16.5798 10.6693 16.7478 10.64 16.9291 10.64ZM21.3107 10.64C21.6147 10.64 21.8787 10.672 22.1027 10.736C22.3321 10.8 22.5081 10.8907 22.6307 11.008C22.7587 11.12 22.8227 11.256 22.8227 11.416C22.8227 11.5227 22.7907 11.624 22.7267 11.72C22.6627 11.8107 22.5694 11.856 22.4467 11.856C22.3614 11.856 22.2894 11.8453 22.2307 11.824C22.1774 11.7973 22.1294 11.7653 22.0867 11.728C22.0441 11.6907 21.9934 11.656 21.9347 11.624C21.8814 11.592 21.7987 11.568 21.6867 11.552C21.5801 11.5307 21.5001 11.52 21.4467 11.52C21.1747 11.52 20.9427 11.5787 20.7507 11.696C20.5641 11.8133 20.4201 11.9733 20.3187 12.176C20.2174 12.3733 20.1667 12.6027 20.1667 12.864C20.1667 13.12 20.2174 13.3493 20.3187 13.552C20.4254 13.7493 20.5694 13.9067 20.7507 14.024C20.9374 14.1413 21.1507 14.2 21.3907 14.2C21.5241 14.2 21.6387 14.192 21.7347 14.176C21.8307 14.16 21.9107 14.136 21.9747 14.104C22.0494 14.0613 22.1161 14.016 22.1747 13.968C22.2334 13.92 22.3214 13.896 22.4387 13.896C22.5774 13.896 22.6841 13.9413 22.7587 14.032C22.8334 14.1173 22.8707 14.224 22.8707 14.352C22.8707 14.4853 22.7961 14.608 22.6467 14.72C22.4974 14.8267 22.3001 14.9147 22.0547 14.984C21.8147 15.048 21.5534 15.08 21.2707 15.08C20.8494 15.08 20.4841 14.984 20.1747 14.792C19.8654 14.5947 19.6254 14.328 19.4547 13.992C19.2894 13.656 19.2067 13.28 19.2067 12.864C19.2067 12.4267 19.2947 12.0427 19.4707 11.712C19.6521 11.376 19.9001 11.1147 20.2147 10.928C20.5347 10.736 20.9001 10.64 21.3107 10.64ZM25.579 15.08C25.1256 15.08 24.731 14.9867 24.395 14.8C24.0643 14.608 23.8083 14.3493 23.627 14.024C23.451 13.6987 23.363 13.3307 23.363 12.92C23.363 12.44 23.459 12.032 23.651 11.696C23.8483 11.3547 24.1043 11.0933 24.419 10.912C24.7336 10.7307 25.067 10.64 25.419 10.64C25.691 10.64 25.947 10.696 26.187 10.808C26.4323 10.92 26.6483 11.0747 26.835 11.272C27.0216 11.464 27.1683 11.688 27.275 11.944C27.387 12.2 27.443 12.472 27.443 12.76C27.4376 12.888 27.387 12.992 27.291 13.072C27.195 13.152 27.083 13.192 26.955 13.192H23.899L23.659 12.392H26.595L26.419 12.552V12.336C26.4083 12.1813 26.3523 12.0427 26.251 11.92C26.155 11.7973 26.0323 11.7013 25.883 11.632C25.739 11.5573 25.5843 11.52 25.419 11.52C25.259 11.52 25.1096 11.5413 24.971 11.584C24.8323 11.6267 24.7123 11.6987 24.611 11.8C24.5096 11.9013 24.4296 12.0373 24.371 12.208C24.3123 12.3787 24.283 12.5947 24.283 12.856C24.283 13.144 24.3416 13.3893 24.459 13.592C24.5816 13.7893 24.7363 13.9413 24.923 14.048C25.115 14.1493 25.3176 14.2 25.531 14.2C25.7283 14.2 25.8856 14.184 26.003 14.152C26.1203 14.12 26.2136 14.0827 26.283 14.04C26.3576 13.992 26.4243 13.952 26.483 13.92C26.579 13.872 26.6696 13.848 26.755 13.848C26.8723 13.848 26.9683 13.888 27.043 13.968C27.123 14.048 27.163 14.1413 27.163 14.248C27.163 14.392 27.0883 14.5227 26.939 14.64C26.8003 14.7573 26.6056 14.8613 26.355 14.952C26.1043 15.0373 25.8456 15.08 25.579 15.08ZM29.3217 14.512C29.3217 14.6507 29.2737 14.768 29.1777 14.864C29.0871 14.9547 28.9724 15 28.8337 15C28.7004 15 28.5884 14.9547 28.4977 14.864C28.4071 14.768 28.3617 14.6507 28.3617 14.512V9.568C28.3617 9.42933 28.4071 9.31467 28.4977 9.224C28.5937 9.128 28.7111 9.08 28.8497 9.08C28.9884 9.08 29.1004 9.128 29.1857 9.224C29.2764 9.31467 29.3217 9.42933 29.3217 9.568V14.512Z" fill="white"/>
<g clipPath="url(#clip0_73_15511)">
<path d="M38 17C40.7614 17 43 14.7614 43 12C43 9.23858 40.7614 7 38 7C35.2386 7 33 9.23858 33 12C33 14.7614 35.2386 17 38 17Z" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34.4648 8.46509L41.5348 15.5351" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_73_15511">
<rect width="12" height="12" fill="white" transform="translate(32 6)"/>
</clipPath>
</defs>
</svg>

</p>

</div>


{ReportsDetailsRedux?.report && ReportsDetailsRedux?.project ? <>
  
  <div className='reviewparents'>

<div className='review'>




<div className='ProjectNumber'>
<section>Project Number</section>
<input type="text"  disabled placeholder={ReportsDetailsRedux?.project?.project_number}></input></div>

<div className='ReviewType'>
    <section>Review Type</section>
   <input type="text"  disabled></input></div>

    <div className='ReportType'>
        <section>Report Type</section>
        <input type="text" disabled placeholder={ReportsDetailsRedux?.report?.file_sub_type}></input></div>

        <div className='RecievingContact'>
        <section>Recieving Contact</section>
        <input type="text" disabled placeholder={ReportsDetailsRedux?.project?.receiving_customer}></input></div>

        <div className='ResponsiblePerson'>
        <section>Responsible Person /Date Created</section>
        <input type="text" placeholder={ReportsDetailsRedux?.report?.reviewer_id + '/' + ReportsDetailsRedux?.report?.report_created_at.slice(0,10)} ></input></div>

        <div className='ReviewerDate'>
        <section>Reviewer /Review Date</section>
        <input type="text" disabled></input></div>

</div>
<div className='reportsreceivingcontainer'>

        <div className='ReportRecieving'>
        <section>Report Recieving Customer</section>
        <input type="text" disabled placeholder={ReportsDetailsRedux?.report?.receiving_customer}></input></div>


        <div className='ReportReview'>
        <section>Report Review Status:</section>
        <input type="text" disabled placeholder={ReportsDetailsRedux?.report?.report_status}></input></div>



        <div className='ProductsCovered'>
        <section>Products Covered</section>
        <input type="text" disabled placeholder={ReportsDetailsRedux?.project?.product_covered}></input></div>

        <div className='Models'>
        <section>Models</section>
        <input type="text" disabled placeholder={ReportsDetailsRedux?.project?.modals}></input></div>

        <div className='Project'>
        <section>Project</section>
        <input type="text" disabled placeholder={ReportsDetailsRedux?.project?.project_name}></input></div>

        <div className='Comments'>
        <section>Comments:</section>
        <input type="text" disabled placeholder={ReportsDetailsRedux?.report?.report_comments}></input></div>


        </div>

<div className='Reportsstandards'>
<section>Report Standards</section>    
</div>

        </div>
        <div className='DocumentsParents'>
    <h4><b>DOCUMENTS</b></h4>
    <button type="button" className="btn btn-dark">ADD REVIEW DOCUMENTS</button>
</div>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Report</th>
      <th scope="col">Model</th>
      <th scope="col">Validation Status</th>
      <th scope="col">Review Status</th>
      <th scope="col"></th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <th scope="row">{ReportsDetailsRedux?.report?.report_number}</th>
      <td>{ReportsDetailsRedux?.project?.modals}</td>
      {ReportsDetailsRedux?.report?.report_status === "SENT TO REVIEWER" ? (
                        <>
                          <td>
                            <span className="badge badge-pill badge-primary">
                              IN PROGRESS
                            </span>
                          </td>
                        </>
                      ) : (
                        ""
                      )}
                      {ReportsDetailsRedux?.report?.report_status === "VALIDATION FAILED" ? (
                        <>
                          <td>
                            <span className="badge badge-pill badge-danger">
                              REJECTED
                            </span>
                          </td>
                        </>
                      ) : (
                        ""
                      )}
      <td><span className="badge badge-pill badge-secondary">Pending</span></td>
      
   
    

<svg className='m-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
 style={{ cursor: "pointer" }}
 onClick={() => {
   var myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   myHeaders.append("Access-Control-Allow-Origin", "http://localhost:8081");
   myHeaders.append("Access-Control-Allow-Credentials", true);
 
  //  axios({
  //    method: 'put',
  //    maxBodyLength: Infinity,
  //    url: 'http://localhost:8081/report/delete',
  //    headers:myHeaders,
  //    credentials: "include", 
  //    withCredentials:true,
  //      data : {
  //        doc_id:ReportsDetailsRedux?.report?.file_id,
  //        report_id: ReportsDetailsRedux?.report?.report_number
  //      },
     
  //  })
  //  .then(function (response) {
  //    // console.log("Response From Delete in Financilas",response.data)  
  //   //  getFinancialsData()
   
  //  })
  //  .catch(function (error) {
  //    console.log("Error block delete teport", error);
  //    if(error?.response?.status===401){
  //      dispatch(LoginDetails({}));
  //          cookies.remove('connect.sid');
  //          localStorage.setItem("AlertMessage", JSON.stringify("Session Expired...Please Login Again"))
  //        navigate('/')
  //    }
     
    
  //  });
 }}
>
<path d="M2.5 5H17.5" stroke="#007D99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8337 5V16.6667C15.8337 17.5 15.0003 18.3333 14.167 18.3333H5.83366C5.00033 18.3333 4.16699 17.5 4.16699 16.6667V5" stroke="#007D99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.66699 4.99984V3.33317C6.66699 2.49984 7.50033 1.6665 8.33366 1.6665H11.667C12.5003 1.6665 13.3337 2.49984 13.3337 3.33317V4.99984" stroke="#007D99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.33301 9.1665V14.1665" stroke="#007D99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.667 9.1665V14.1665" stroke="#007D99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

<svg className='m-2' width="20" height="17" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{cursor:"pointer"}}
onClick={() => {
  window.open(
    `http://localhost:8081/report/download/${ReportsDetailsRedux?.report?.file_id}`
  );
}}
>
  <path d="M19 11V14.3333C19 14.7754 18.7893 15.1993 18.4142 15.5118C18.0391 15.8244 17.5304 16 17 16H3C2.46957 16 1.96086 15.8244 1.58579 15.5118C1.21071 15.1993 1 14.7754 1 14.3333V11" stroke="#007D99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5 6.8335L10 11.0002L15 6.8335" stroke="#007D99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10 11V1" stroke="#007D99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
        
  </tr>


  </tbody>
</table>

</>:""}


        
            






   
</div>


    
  )
}

export default ViewReportsScreen
