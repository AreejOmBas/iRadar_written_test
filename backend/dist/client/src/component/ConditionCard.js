"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionCard = void 0;
var react_1 = __importDefault(require("react"));
require("./ConditionCard.css");
var ConditionCard = function (_a) {
    var image = _a.image, snippet = _a.snippet, label = _a.label;
    var addDefaultSrc = function (e) {
        e.currentTarget.src =
            'https://cdn.pixabay.com/photo/2013/07/18/10/55/dna-163466_1280.jpg';
    };
    return (<article className='card'>
      {image ? (<img className='card-img' onError={addDefaultSrc} src={image} alt={label}/>) : (<img className='card-generic-img' src='https://cdn.pixabay.com/photo/2013/07/18/10/55/dna-163466_1280.jpg' alt={label}/>)}

      <div className='card-body'>
        <p className='card-title'>{label}</p>

        {snippet && (<span> {snippet.substring(0, snippet.lastIndexOf(' ', 50))}.... </span>)}
        <a href='#'>find out more.</a>
      </div>
    </article>);
};
exports.ConditionCard = ConditionCard;
