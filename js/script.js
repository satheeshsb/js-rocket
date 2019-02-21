var car= {
			make: 'vw',
			type: 'polo',
			color:'white',
			isturnedon: false,
			years: 2010,
			seats: [
				'seat1',		
				'seat2',
				'seat3',
				'seat4'
			],
			turnon: function (){
				this.isturnedon=true;
				alert('turned on');
			}
			
		};

	console.log('hello there js');