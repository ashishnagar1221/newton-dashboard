import React from 'react';

const NewtonHead = (props) =>{
    return (
        <div className='container hr cnt1'>
            <div className="part1 int">
                <img className = 'logo' src ="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='121px' height='121px' viewBox='0 0 121 121' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E %3Ctitle%3EGroup%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='11' transform='translate(-85.000000, -444.000000)'%3E %3Cg id='Group' transform='translate(85.000000, 444.000000)'%3E %3Cpath d='M121,0 L121,60.5 C121,93.9132274 93.9132274,121 60.5,121 C27.0867726,121 0,93.9132274 0,60.5 C0,27.0867726 27.0867726,0 60.5,0 L60.5,0 L121,0 Z' id='Combined-Shape' fill='%236BA9E1'%3E%3C/path%3E %3Cpath d='M29.9991305,9.00050709 L29.9991305,112.999493 C12.0495586,102.530897 0,83.1625463 0,61 C0,38.8374537 12.0495586,19.4691028 29.9991305,9.00050709 Z' id='Combined-Shape' fill='%23719DE6'%3E%3C/path%3E %3Cpath d='M61,0 L61,121 C49.6896363,121 39.0947971,117.976087 30.0000026,112.702639 L30.0000026,8.2973615 C38.8225978,3.18174225 49.0567914,0.18302114 59.986416,0.00810527147 L61,0 Z' id='Combined-Shape' fill='%2352D2CE'%3E%3C/path%3E %3Cpath d='M60.4333989,0 L109.000019,97.0028949 C103.306307,104.571975 95.8797728,110.766798 87.3086261,114.999938 L33.0002978,6.5288324 C40.9599303,2.49511474 49.9294828,0.161945428 59.4295193,0.00812199514 L60.4333989,0 Z' id='Combined-Shape' fill='%2349E1C7'%3E%3C/path%3E %3Cpath d='M121,0 L121,60.4437296 C121,82.9590366 108.515898,102.599042 90.0012292,112.999886 L90,0 L121,0 Z' id='Combined-Shape' fill='%2356CAD1'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"></img>
            </div>
            <div className="part1 text">
                <span id = "bold">Newton </span> School
            </div> 
            <div className="part2 int">
                <a href="#"> <img className = 'logosmall' src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADm5ua2trZycnInJyd1dXXo6Ohra2vj4+MjIyPg4OAqKiomJiZnZ2ctLS0dHR2srKy3t7f09PQXFxeqqqr4+Pg6OjrHx8eWlpYODg5ubm5jY2OOjo56enqDg4NVVVVKSkpDQ0NJlO6YAAAD7UlEQVR4nO3c63baOhSFURsChEsCgVzItU3e/yELpJsBwtKSbEvaYqz5kxBqN1+1LfWcVhURERERERERERERERERERERERERERERERERERG1tdk8576E3jxvNuZL649ZXdcvn5Mc19OzyefL7l5mH+uT17aPtfjKdmF9GR/vZbWV1z7rE6t5zsvrbL46vZnX3xdf63MPea+xkwfjXg63uK1N97mvs7X7i3vZhzq7eLXUUs8L/XXX9CPce8p9tS08Nd7JtvpqfL3AUi8LPfhTLZu/UL+VVer8zXIfL5XlC4WV2lzo4SfluMOCSrUUelAtHF8sZE1tWkOPltWN46tllGovdO+mGjq/XkCprkJ3ds/f7jdoL9VZ6F6Ffsi17udU8zm0+eL/onfpLRUUWtcfv+/7Ru971Fnq/BFd+Le81b2e7mksFRa6W0ePwIJaaywVFloPT98+cQ3+A2VrKlxD64V55jRG36GqVFzo+PKbcKm36e/E4hZe67Dp2yYj9G2raepbaTSFhY5sp6JllNqqUFFCqS0LFRPblv8o8/THU36Jzu11T/+gKW+zhh+Sb/rjKb/GH1JVA1jqLE+p84aj3XPLgedH6Sy1l0KFxjW14xpqGsDpn7hUXOjIt1Cha/p3mvI2mkrtuVCBd1SJpj+e8hc7JV86So1SqNBQaqRCxQCWOou7o5rCNXQRuoaa8pYatVCBn1PjlYoL9XoORbKVmqBQkec5tdfnUCTHmhp5DTXhvX/P56n4PBTu5UOlLTVpoSJlqYkLFcnW1IRrqCnN9E8y5W1wqe+df413+GtEKVR47P27lYoLDd7Lh4pbatZCRcxSMxcqPKZ/u1Lx3yn1PuVt8PRv81uN44gw5W1i7KgyTXkbfPI/Cit1eoc+0PvEvi/9lqqqUP+L8l9TlayhJjz9PUudwg+6S12owNPf57cex5Bgyre/OPzHJ87o6Y3Hf0vlLhVP+dYn9n3ptvfPspcP1aVUpWuoCe/9LWsqnvLR9vKh2q2pqtdQU5vpX0ihwqPU8+Dw44KaQkXYWFP5HIqElFpYoQLv/f+fUuHTpmR7+VB+pRZZqPC4+Gflz6EIXiKh6OehXeHp76ZoytvgUl1UFyoG8HHTKttePlTbUgsoVLQrtYhCBZ7+F9ROeRs89s4pnvI2YaUWVajAJ/9HCx3/Q1U431ILLFT4lVpkocJj+hcz5W3Q9C9oytu4Sy26UOE4+c9+Yt8X25pa8Bpqai71KgoVDeep6vfyocw19YoKFeelXlWhYvBzvL+faytUbMf7o7jReIvfWq7N5b8OS0RERERERERERERERERERERERERERERERERERMr8A5PsKDFITHfYAAAAAElFTkSuQmCC"></img></a>
            </div>
            <div className="part2 int">
                <img className = 'logo' src='https://www.pngitem.com/pimgs/m/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png'></img>
            </div>
        </div>
    )
}

export default NewtonHead;