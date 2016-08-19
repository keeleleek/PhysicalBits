#pragma once

#include "Reader.h"
#include "EEPROMReader.h"

class EEPROMWearLevelingReader : public Reader
{

public:
	EEPROMWearLevelingReader();
	~EEPROMWearLevelingReader();
	
	unsigned char next(void);
	unsigned char next(bool&);

	bool atEnd(void);

private:

	EEPROMReader * reader;
	int endPosition;

	int findPosition(void);
	unsigned char escapeIfNecessary(unsigned char);
};

